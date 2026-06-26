import React from 'react';
import { Box, Container, Typography, alpha, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const FlexibleProcessing: React.FC = () => {
  return (
    <Box sx={{ py: 12, bgcolor: alpha(COLORS.dark, 0.98), overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}  >
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography variant="h6" sx={{ color: COLORS.accent, mb: 1, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Programs
              </Typography>
              <Typography variant="h3" sx={{ mb: 4, color: COLORS.light }}>
                Flexible Processing Programs
              </Typography>
              <Typography variant="body1" sx={{ color: alpha(COLORS.light, 0.7), mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                AB POS supports different processing programs, including <strong>Flat Rate</strong> and <strong>Interchange Plus</strong>, so each partner can choose the model that best adapts to their business strategy, merchant portfolio, margins, and growth goals.
              </Typography>
              <Typography variant="body1" sx={{ color: alpha(COLORS.light, 0.7), mb: 5, fontSize: '1.1rem', lineHeight: 1.7 }}>
                This flexibility is vital because every partner operates differently. AB POS gives partners the ability to select the pricing structure that works best for them instead of forcing a single model.
              </Typography>
              
              <Box sx={{ p: 3, borderLeft: `4px solid ${COLORS.primary}`, bgcolor: alpha(COLORS.primary, 0.05), borderRadius: '0 8px 8px 0' }}>
                <Typography variant="h6" sx={{ color: COLORS.primary, fontStyle: 'italic' }}>
                  "Your partnership. Your pricing strategy. One connected platform."
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}  >
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  bgcolor: alpha(COLORS.secondary, 0.1), 
                  border: `1px solid ${alpha(COLORS.accent, 0.2)}`,
                  borderRadius: 4,
                  position: 'relative'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
                  <AccountTreeIcon sx={{ color: COLORS.accent, fontSize: 32 }} />
                  <Typography variant="h5" sx={{ color: COLORS.light }}>Pricing Models</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ p: 3, bgcolor: alpha(COLORS.dark, 0.5), borderRadius: 2, border: `1px solid ${alpha(COLORS.light, 0.1)}` }}>
                    <Typography variant="h6" sx={{ color: COLORS.light, mb: 1 }}>Flat Rate</Typography>
                    <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.6) }}>
                      Simple, predictable pricing. Ideal for businesses looking for consistency and straightforward statements.
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3, bgcolor: alpha(COLORS.dark, 0.5), borderRadius: 2, border: `1px solid ${alpha(COLORS.light, 0.1)}` }}>
                    <Typography variant="h6" sx={{ color: COLORS.light, mb: 1 }}>Interchange Plus</Typography>
                    <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.6) }}>
                      Transparent, wholesale pricing plus a markup. Perfect for high-volume merchants seeking cost optimization.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
