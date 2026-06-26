import React from 'react';
import { AppBar, Toolbar, Box, Button, Container, Typography, alpha } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { COLORS } from '../../theme';

const navItems = [
  { title: 'Product', hasDropdown: true },
  { title: 'Contactless Ordering', hasDropdown: true },
  { title: 'Merchant Services', hasDropdown: true },
  { title: 'Partner', hasDropdown: true },
];

export const Header: React.FC = () => {


  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: alpha(COLORS.dark, 0.7),
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${alpha(COLORS.light, 0.05)}`
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
          
          {/* Logo Area */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ fontWeight: 'bold', color: COLORS.light, letterSpacing: '-0.05em', fontStyle: 'italic' }}
            >
              AB POS
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navItems.map((item) => (
              <Box key={item.title} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
                <Typography variant="body2" sx={{ fontWeight: 500, color: COLORS.light }}>
                  {item.title}
                </Typography>
                {item.hasDropdown && <KeyboardArrowDownIcon sx={{ fontSize: 18, color: COLORS.light, ml: 0.5 }} />}
              </Box>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              href="#"
              sx={{ 
                bgcolor: COLORS.light, 
                color: COLORS.secondary, 
                fontWeight: 'bold',
                px: 4,
                '&:hover': {
                  bgcolor: alpha(COLORS.light, 0.9),
                  boxShadow: `0 4px 14px ${alpha(COLORS.light, 0.3)}`,
                }
              }}
            >
              Login
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
