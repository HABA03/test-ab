import React from 'react';
import { Box, Container, Typography, alpha, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import { useLanguage } from '../../../../shared/context/LanguageContext';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const FlexibleProcessing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, background: COLORS.gradient, overflow: 'hidden', position: 'relative' }}>
      {/* Decorative Glows */}
      <Box 
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: `radial-gradient(circle, ${alpha(COLORS.accent, 0.2)} 0%, transparent 70%)`,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8} sx={{ alignItems: "center" }}>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: COLORS.accent, 
                  mb: 1.5, 
                  fontWeight: 'bold', 
                  textTransform: 'uppercase', 
                  letterSpacing: 1.5,
                  fontSize: '0.9rem'
                }}
              >
                {t.flexible.badge}
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 3.5, 
                  color: COLORS.light,
                  fontWeight: 850,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2
                }}
              >
                {t.flexible.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: alpha(COLORS.light, 0.8), 
                  mb: 3, 
                  fontSize: { xs: '1.05rem', md: '1.15rem' }, 
                  lineHeight: 1.7 
                }}
              >
                {t.flexible.p1}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: alpha(COLORS.light, 0.8), 
                  mb: 5, 
                  fontSize: { xs: '1.05rem', md: '1.15rem' }, 
                  lineHeight: 1.7 
                }}
              >
                {t.flexible.p2}
              </Typography>
              
              <Box 
                sx={{ 
                  p: 3, 
                  borderLeft: `4px solid ${COLORS.accent}`, 
                  bgcolor: alpha(COLORS.accent, 0.08), 
                  borderRadius: '0 8px 8px 0',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Typography variant="h6" sx={{ color: COLORS.accent, fontStyle: 'italic', fontWeight: 500, fontSize: '1.05rem' }}>
                  {t.flexible.quote}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4.5, 
                  bgcolor: alpha(COLORS.light, 0.03), 
                  border: `1px solid ${alpha(COLORS.light, 0.1)}`,
                  borderRadius: 5,
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
                  <AccountTreeIcon sx={{ color: COLORS.accent, fontSize: 32 }} />
                  <Typography variant="h5" sx={{ color: COLORS.light, fontWeight: 700 }}>{t.flexible.cardTitle}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                  
                  <Box 
                    sx={{ 
                      p: 3, 
                      bgcolor: alpha(COLORS.dark, 0.4), 
                      borderRadius: 3, 
                      border: `1px solid ${alpha(COLORS.light, 0.08)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: COLORS.accent,
                        boxShadow: `0 8px 24px ${alpha(COLORS.accent, 0.15)}`,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ color: COLORS.light, mb: 1, fontWeight: 700 }}>
                      {t.flexible.flatTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.65), lineHeight: 1.6 }}>
                      {t.flexible.flatDesc}
                    </Typography>
                  </Box>
                  
                  <Box 
                    sx={{ 
                      p: 3, 
                      bgcolor: alpha(COLORS.dark, 0.4), 
                      borderRadius: 3, 
                      border: `1px solid ${alpha(COLORS.light, 0.08)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: COLORS.primary,
                        boxShadow: `0 8px 24px ${alpha(COLORS.primary, 0.15)}`,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ color: COLORS.light, mb: 1, fontWeight: 700 }}>
                      {t.flexible.interchangeTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.65), lineHeight: 1.6 }}>
                      {t.flexible.interchangeDesc}
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
