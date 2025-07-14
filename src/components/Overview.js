import React from 'react';
import { Box } from '@mui/material';
import ExecutiveSummary from './ExecutiveSummary';
import MarketRecommendations from './MarketRecommendations';

const Overview = ({ selectedMarket }) => (
  <Box>
    <ExecutiveSummary selectedMarket={selectedMarket} />
    <Box sx={{ mt: 4 }}>
      <MarketRecommendations selectedMarket={selectedMarket} />
    </Box>
  </Box>
);

export default Overview;
