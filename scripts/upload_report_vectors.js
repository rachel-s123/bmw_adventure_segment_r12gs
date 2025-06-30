const fs = require('fs');
const path = require('path');
const OpenAI = require('openai').default;
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const pdfDir = path.join(__dirname, '../vector_reports');
  const pdfPaths = fs
    .readdirSync(pdfDir)
    .filter((f) => f.toLowerCase().endsWith('.pdf'))
    .map((f) => path.join(pdfDir, f));

  if (pdfPaths.length === 0) {
    console.error('No PDF files found in', pdfDir);
    return;
  }

  console.log('Creating vector store...');
  const store = await openai.beta.vectorStores.create({ name: 'bmw-report-vectors' });
  console.log('Created vector store:', store.id);

  console.log('Uploading PDFs...');
  await openai.beta.vectorStores.fileBatches.uploadAndPoll(store.id, {
    files: pdfPaths.map((p) => fs.createReadStream(p)),
  });

  console.log('Upload complete. Vector store ID:', store.id);
}

main().catch((err) => {
  console.error('Error uploading report vectors:', err);
});
