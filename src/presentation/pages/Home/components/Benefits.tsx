import React from 'react';
import { Box, Container, Typography, alpha, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import { useLanguage } from '../../../../shared/context/LanguageContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Benefits: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#F0F4FF', position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: COLORS.primary, 
                mb: 1.5, 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: 1.5,
                fontSize: '0.9rem'
              }}
            >
              {t.benefits.badge}
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                color: COLORS.dark,
                fontWeight: 850,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2
              }}
            >
              {t.benefits.title}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
          {t.benefits.items.map((benefit: string, index: number) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{ height: '100%' }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    bgcolor: '#FFFFFF', 
                    border: `1px solid ${alpha(COLORS.dark, 0.06)}`,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: COLORS.primary,
                      bgcolor: alpha(COLORS.primary, 0.02),
                      boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.08)}`,
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <CheckCircleIcon sx={{ color: COLORS.primary, fontSize: 26, flexShrink: 0 }} />
                  <Typography variant="body1" sx={{ color: COLORS.dark, fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.4 }}>
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
