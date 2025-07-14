// Placeholder script to generate model-level data
const fs = require('fs');
const path = require('path');

const outputFile = path.join(__dirname, '../src/data/modelData.js');

function main() {
  const data = {
    models: ['r_12_gs', 'r_1300_gs'],
    attributes: ['Off-Road Performance', 'Comfort & Ergonomics', 'Technology & Features'],
    scores: {
      'Off-Road Performance': {
        r_12_gs: 85,
        r_1300_gs: 90
      },
      'Comfort & Ergonomics': {
        r_12_gs: 70,
        r_1300_gs: 80
      },
      'Technology & Features': {
        r_12_gs: 65,
        r_1300_gs: 95
      }
    }
  };

  const js = `// Auto-generated placeholder model data\nexport const modelData = ${JSON.stringify(data, null, 2)};`;
  fs.writeFileSync(outputFile, js);
  console.log('Generated model data:', outputFile);
}

main();
