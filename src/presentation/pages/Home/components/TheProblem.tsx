import React from 'react';
import { Box, Container, Typography, alpha, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HandymanIcon from '@mui/icons-material/Handyman';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TuneIcon from '@mui/icons-material/Tune';

const problems = [
  { text: 'Limited visibility', icon: <VisibilityOffIcon /> },
  { text: 'Manual processes', icon: <HandymanIcon /> },
  { text: 'Less operational control', icon: <SpeedIcon /> },
  { text: 'Difficulty scaling', icon: <TrendingDownIcon /> },
  { text: 'Less flexibility when choosing the right pricing model for each partnership', icon: <TuneIcon /> },
];

export const TheProblem: React.FC = () => {
  return (
    <Box sx={{ py: 12, bgcolor: alpha(COLORS.dark, 0.95), position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Typography variant="h6" sx={{ color: '#FF4A5A', mb: 1, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>
              The Problem
            </Typography>
            <Typography variant="h3" sx={{ mb: 3, color: COLORS.light }}>
              Distributors often work with separate systems for sales, payments, support, customers, reporting, and processing programs.
            </Typography>
            <Typography variant="h6" sx={{ color: alpha(COLORS.light, 0.6), fontWeight: 400 }}>
              This creates a fragmented ecosystem that leads to:
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {problems.map((problem, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}    key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    bgcolor: alpha('#FF4A5A', 0.05),
                    border: `1px solid ${alpha('#FF4A5A', 0.1)}`,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 24px ${alpha('#FF4A5A', 0.15)}`,
                      border: `1px solid ${alpha('#FF4A5A', 0.3)}`,
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: '#FF4A5A', mb: 2, '& > svg': { fontSize: 40 } }}>
                      {problem.icon}
                    </Box>
                    <Typography variant="body1" sx={{ color: COLORS.light, fontWeight: 500 }}>
                      {problem.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
