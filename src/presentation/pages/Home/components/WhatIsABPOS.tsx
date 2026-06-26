import React from 'react';
import { Box, Container, Typography, alpha, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import HubIcon from '@mui/icons-material/Hub';

export const WhatIsABPOS: React.FC = () => {
  return (
    <Box sx={{ py: 12, bgcolor: COLORS.dark }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}  >
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography variant="h6" sx={{ color: COLORS.accent, mb: 1, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Ecosystem
              </Typography>
              <Typography variant="h2" sx={{ mb: 4, color: COLORS.light }}>
                What is AB POS?
              </Typography>
              <Typography variant="h5" sx={{ color: alpha(COLORS.light, 0.7), lineHeight: 1.6, fontWeight: 400 }}>
                AB POS is an ecosystem that helps manage merchants, payments, sales, operations, and reporting from one centralized platform.
              </Typography>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}  >
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              {/* Image Placeholder */}
              <Box 
                sx={{ 
                  height: 400, 
                  borderRadius: 4, 
                  border: `2px dashed ${alpha(COLORS.accent, 0.3)}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  background: `radial-gradient(circle at center, ${alpha(COLORS.primary, 0.1)} 0%, transparent 70%)`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <HubIcon sx={{ fontSize: 80, color: alpha(COLORS.accent, 0.5), mb: 2 }} />
                <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.5) }}>
                  [ Centralized Dashboard Image Placeholder ]
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
