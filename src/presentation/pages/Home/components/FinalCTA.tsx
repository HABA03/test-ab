import React from 'react';
import { Box, Container, Typography, alpha, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';

export const FinalCTA: React.FC = () => {
  return (
    <Box sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
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
          background: `linear-gradient(to bottom, ${COLORS.dark} 0%, transparent 100%)`,
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ color: COLORS.light, mb: 6, fontWeight: 700 }}>
            Connect your financial operation in one platform.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button 
              variant="contained" 
              size="large"
              href="#"
              sx={{ 
                bgcolor: COLORS.light, 
                color: COLORS.secondary, 
                px: 5, 
                py: 1.5, 
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: alpha(COLORS.light, 0.9),
                  boxShadow: `0 4px 20px ${alpha(COLORS.light, 0.4)}`,
                }
              }}
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
                color: COLORS.light,
                '&:hover': {
                  borderColor: COLORS.light,
                  background: alpha(COLORS.light, 0.1)
                }
              }}
            >
              Talk to Our Team
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
