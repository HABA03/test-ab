import React from 'react';
import { Box, Container, Typography, alpha, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';

export const WhatIsABPOS: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF', position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          
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
                  color: COLORS.primary, 
                  mb: 1.5, 
                  fontWeight: 'bold', 
                  textTransform: 'uppercase', 
                  letterSpacing: 1.5,
                  fontSize: '0.9rem'
                }}
              >
                Ecosistema Integrado
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 3.5, 
                  color: COLORS.dark, 
                  fontWeight: 850,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2
                }}
              >
                ¿Qué es AB POS?
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: alpha(COLORS.dark, 0.75), 
                  lineHeight: 1.7, 
                  fontWeight: 400,
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  mb: 3
                }}
              >
                AB POS es un ecosistema integral y unificado diseñado para centralizar y simplificar la gestión de tu red comercial. Te permite administrar comercios, procesar pagos, controlar ventas, supervisar operaciones y obtener reportes avanzados, todo desde un único punto de control.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: alpha(COLORS.dark, 0.75), 
                  lineHeight: 1.7, 
                  fontWeight: 400,
                  fontSize: { xs: '1.05rem', md: '1.15rem' }
                }}
              >
                Olvídate de la fragmentación operativa. Nuestra plataforma consolida cada interacción del negocio para brindarte visibilidad absoluta y optimizar la toma de decisiones críticas en tiempo real.
              </Typography>
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Box 
                sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(8, 10, 59, 0.08)',
                  border: `1px solid ${alpha(COLORS.dark, 0.06)}`,
                  display: 'flex',
                  bgcolor: '#FFFFFF',
                  position: 'relative'
                }}
              >
                <Box 
                  component="img" 
                  src="/dashboard.png" 
                  alt="Ecosistema de Panel Centralizado AB POS" 
                  sx={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }} 
                />
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
