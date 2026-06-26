import React from 'react';
import { Box } from '@mui/material';
import { Hero } from './components/Hero';
import { WhatIsABPOS } from './components/WhatIsABPOS';
import { TheProblem } from './components/TheProblem';
import { TheSolution } from './components/TheSolution';
import { FlexibleProcessing } from './components/FlexibleProcessing';
import { TargetAudience } from './components/TargetAudience';
import { Benefits } from './components/Benefits';
import { MerchantSolutions } from './components/MerchantSolutions';
import { FinalCTA } from './components/FinalCTA';

export const Home: React.FC = () => {
  return (
    <Box>
      <Hero />
      <WhatIsABPOS />
      <TheProblem />
      <TheSolution />
      <FlexibleProcessing />
      <TargetAudience />
      <Benefits />
      <MerchantSolutions />
      <FinalCTA />
    </Box>
  );
};
