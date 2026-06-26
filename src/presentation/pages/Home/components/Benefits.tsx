import React from 'react';
import { Box, Container, Typography, alpha, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const benefits = [
  'More control',
  'More visibility',
  'Better follow-up',
  'Fewer manual processes',
  'Greater growth capacity',
  'Better decision-making',
  'Greater pricing flexibility through Flat Rate and Interchange Plus programs'
];

export const Benefits: React.FC = () => {
  return (
    <Box sx={{ py: 12, bgcolor: alpha(COLORS.dark, 0.95), position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Typography variant="h6" sx={{ color: COLORS.primary, mb: 1, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>
              Why Choose Us
            </Typography>
            <Typography variant="h2" sx={{ color: COLORS.light }}>
              Benefits
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {benefits.map((benefit, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}    key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    bgcolor: alpha(COLORS.dark, 0.5), 
                    border: `1px solid ${alpha(COLORS.light, 0.1)}`,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: COLORS.primary,
                      bgcolor: alpha(COLORS.primary, 0.1),
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <CheckCircleIcon sx={{ color: COLORS.primary, fontSize: 28 }} />
                  <Typography variant="body1" sx={{ color: COLORS.light, fontWeight: 500 }}>
                    {benefit}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
