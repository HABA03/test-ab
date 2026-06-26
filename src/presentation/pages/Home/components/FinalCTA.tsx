import React from 'react';
import { Box, Container, Typography, alpha, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';

export const FinalCTA: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 12, md: 16 }, position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradient */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: COLORS.gradient,
          zIndex: 0,
        }}
      />
      {/* Overlay to blend with previous section */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: `linear-gradient(to bottom, #FFFFFF 0%, transparent 100%)`,
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.93 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              color: COLORS.light, 
              mb: 6, 
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
              lineHeight: 1.25,
              textShadow: `0 4px 20px ${alpha(COLORS.dark, 0.4)}`
            }}
          >
            Conecta y simplifica tu operación financiera en una sola plataforma
          </Typography>

          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2.5, 
              justifyContent: 'center', 
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center'
            }}
          >
            <Button 
              variant="contained" 
              size="large"
              href="#"
              sx={{ 
                bgcolor: COLORS.light, 
                color: COLORS.secondary, 
                px: 5, 
                py: 1.8, 
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: `0 8px 25px rgba(0,0,0,0.15)`,
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  bgcolor: alpha(COLORS.light, 0.9),
                  boxShadow: `0 12px 30px ${alpha(COLORS.light, 0.25)}`,
                }
              }}
            >
              Solicitar una Demo
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              href="#"
              sx={{ 
                px: 5, 
                py: 1.8, 
                fontSize: '1rem',
                fontWeight: 'bold',
                borderColor: alpha(COLORS.light, 0.4),
                color: COLORS.light,
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: COLORS.light,
                  background: alpha(COLORS.light, 0.1)
                }
              }}
            >
              Hablar con Ventas
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
