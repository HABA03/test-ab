import React from 'react';
import { Box, Container, Typography, alpha, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import { useLanguage } from '../../../../shared/context/LanguageContext';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HandymanIcon from '@mui/icons-material/Handyman';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TuneIcon from '@mui/icons-material/Tune';

export const TheProblem: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <VisibilityOffIcon key={0} />,
    <HandymanIcon key={1} />,
    <SpeedIcon key={2} />,
    <TrendingDownIcon key={3} />,
    <TuneIcon key={4} />
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFF5F5', position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#E53E3E', 
                mb: 1.5, 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: 1.5,
                fontSize: '0.9rem'
              }}
            >
              {t.problem.badge}
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3, 
                color: COLORS.dark, 
                fontWeight: 850,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.25
              }}
            >
              {t.problem.title}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: alpha(COLORS.dark, 0.7), 
                fontWeight: 400,
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                lineHeight: 1.6
              }}
            >
              {t.problem.desc}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
          {t.problem.items.map((text: string, index: number) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    bgcolor: '#FFFFFF',
                    border: `1px solid ${alpha('#E53E3E', 0.12)}`,
                    boxShadow: '0 10px 30px rgba(229, 62, 62, 0.03)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2.5,
                    borderRadius: 4,
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 40px rgba(229, 62, 62, 0.08)',
                      borderColor: '#E53E3E',
                    }
                  }}
                >
                  <CardContent sx={{ p: 1 }}>
                    <Box 
                      sx={{ 
                        color: '#E53E3E', 
                        mb: 2.5, 
                        display: 'inline-flex',
                        p: 1.5,
                        borderRadius: '50%',
                        bgcolor: alpha('#E53E3E', 0.06),
                        '& > svg': { fontSize: 32 } 
                      }}
                    >
                      {icons[index]}
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: COLORS.dark, 
                        fontWeight: 600,
                        fontSize: '1rem',
                        lineHeight: 1.45
                      }}
                    >
                      {text}
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
