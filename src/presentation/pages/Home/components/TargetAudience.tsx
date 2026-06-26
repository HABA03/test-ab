import React from 'react';
import { Box, Container, Typography, alpha, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import { useLanguage } from '../../../../shared/context/LanguageContext';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';

export const TargetAudience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF', position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'stretch' }}>
          
          {/* Who It's For */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                <PeopleIcon sx={{ color: COLORS.primary, fontSize: 40 }} />
                <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                  {t.audience.title1}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: alpha(COLORS.dark, 0.7), mb: 4, fontSize: '1.05rem', lineHeight: 1.6 }}>
                {t.audience.desc1}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 'auto' }}>
                {t.audience.items.map((item: string) => (
                  <motion.div key={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Chip 
                      label={item} 
                      sx={{ 
                        bgcolor: alpha(COLORS.primary, 0.08), 
                        color: COLORS.primary,
                        border: `1px solid ${alpha(COLORS.primary, 0.25)}`,
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        py: 2.2,
                        px: 1,
                        borderRadius: '12px',
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: COLORS.primary,
                          color: '#FFFFFF',
                          borderColor: COLORS.primary
                        }
                      }} 
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Spacer */}
          <Grid size={{ xs: 12, md: 1 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ height: '80%', width: '1px', bgcolor: alpha(COLORS.dark, 0.08) }} />
          </Grid>

          {/* Industries We Help */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                <BusinessIcon sx={{ color: COLORS.secondary, fontSize: 40 }} />
                <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                  {t.audience.title2}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: alpha(COLORS.dark, 0.7), mb: 4, fontSize: '1.05rem', lineHeight: 1.6 }}>
                {t.audience.desc2}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 'auto' }}>
                {t.audience.industries.map((item: string) => (
                  <motion.div key={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Chip 
                      label={item} 
                      sx={{ 
                        bgcolor: alpha(COLORS.secondary, 0.08), 
                        color: COLORS.secondary,
                        border: `1px solid ${alpha(COLORS.secondary, 0.25)}`,
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        py: 2.2,
                        px: 1,
                        borderRadius: '12px',
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: COLORS.secondary,
                          color: '#FFFFFF',
                          borderColor: COLORS.secondary
                        }
                      }} 
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
