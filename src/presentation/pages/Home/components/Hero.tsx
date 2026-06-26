import React from 'react';
import { Box, Button, Container, Typography, alpha } from '@mui/material';
import { COLORS } from '../../../theme';

export const Hero: React.FC = () => {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        pt: { xs: 15, md: 25 },
        pb: { xs: 10, md: 20 },
        background: COLORS.gradient,
        overflow: 'hidden',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
          background: `radial-gradient(circle, ${alpha(COLORS.accent, 0.15)} 0%, transparent 70%)`,
          zIndex: 0
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '40vw',
          height: '40vw',
          background: `radial-gradient(circle, ${alpha(COLORS.primary, 0.15)} 0%, transparent 70%)`,
          zIndex: 0
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            color: COLORS.light, 
            mb: 3,
            textShadow: `0 4px 20px ${alpha(COLORS.dark, 0.5)}`
          }}
        >
          Technology for financial solutions distributors
        </Typography>
        
        <Typography 
          variant="h4" 
          component="p" 
          sx={{ 
            color: alpha(COLORS.light, 0.8), 
            mb: 6,
            fontWeight: 400
          }}
        >
          One ecosystem. Total control.
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            href="#"
            sx={{ px: 5, py: 1.5, fontSize: '1.1rem' }}
          >
            Request a Demo
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            href="#"
            sx={{ 
              px: 5, 
              py: 1.5, 
              fontSize: '1.1rem',
              borderColor: alpha(COLORS.light, 0.5),
              '&:hover': {
                borderColor: COLORS.light,
                background: alpha(COLORS.light, 0.1)
              }
            }}
          >
            Explore Platform
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
