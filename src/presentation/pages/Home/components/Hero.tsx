import React from 'react';
import { Box, Button, Container, Typography, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';

export const Hero: React.FC = () => {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        pt: { xs: 12, md: 20 },
        pb: { xs: 10, md: 16 },
        background: COLORS.gradient,
        overflow: 'hidden',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '75vh'
      }}
    >
      {/* Elementos decorativos (Glows futuristas) */}
      <Box 
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: `radial-gradient(circle, ${alpha(COLORS.accent, 0.25)} 0%, transparent 70%)`,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '40vw',
          height: '40vw',
          background: `radial-gradient(circle, ${alpha(COLORS.primary, 0.25)} 0%, transparent 70%)`,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              color: COLORS.light, 
              mb: 3,
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              lineHeight: 1.15,
              textShadow: `0 4px 30px ${alpha(COLORS.dark, 0.6)}`
            }}
          >
            Tecnología para distribuidores de soluciones financieras
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography 
            variant="h5" 
            component="p" 
            sx={{ 
              color: alpha(COLORS.light, 0.85), 
              mb: 6,
              fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.6rem' },
              fontWeight: 400,
              maxWidth: '650px',
              mx: 'auto',
              textShadow: `0 2px 10px ${alpha(COLORS.dark, 0.4)}`
            }}
          >
            Un solo ecosistema. Control total.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
              color="primary" 
              size="large"
              href="#"
              sx={{ 
                px: 5, 
                py: 1.8, 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                boxShadow: `0 8px 25px ${alpha(COLORS.primary, 0.45)}`,
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  bgcolor: alpha(COLORS.primary, 0.85),
                  boxShadow: `0 12px 30px ${alpha(COLORS.primary, 0.65)}`
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
                color: COLORS.light,
                borderColor: alpha(COLORS.light, 0.4),
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: COLORS.light,
                  background: alpha(COLORS.light, 0.1)
                }
              }}
            >
              Explorar Plataforma
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
