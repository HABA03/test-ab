import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  Container, 
  Typography, 
  alpha, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { COLORS } from '../../theme';

const navItems = [
  { title: 'Producto', hasDropdown: true },
  { title: 'Pedidos sin Contacto', hasDropdown: true },
  { title: 'Servicios para Comercios', hasDropdown: true },
  { title: 'Socios', hasDropdown: true },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center', 
        p: 3, 
        bgcolor: COLORS.dark, 
        height: '100%', 
        color: COLORS.light,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          my: 3, 
          fontWeight: 'bold', 
          fontStyle: 'italic', 
          letterSpacing: '-0.05em',
          color: COLORS.light
        }}
      >
        AB POS
      </Typography>
      
      <List sx={{ width: '100%', flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', py: 2, borderRadius: 2, '&:hover': { bgcolor: alpha(COLORS.light, 0.1) } }}>
              <ListItemText 
                primary={
                  <Typography sx={{ fontWeight: 500, fontSize: '1rem', color: COLORS.light }}>
                    {item.title}
                  </Typography>
                } 
              />
              {item.hasDropdown && <KeyboardArrowDownIcon sx={{ fontSize: 18, color: alpha(COLORS.light, 0.7), ml: 0.5 }} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ width: '100%', pb: 4 }}>
        <Button 
          variant="contained" 
          fullWidth
          href="#"
          sx={{ 
            bgcolor: COLORS.primary, 
            color: '#fff', 
            fontWeight: 'bold',
            py: 1.5,
            fontSize: '1rem',
            '&:hover': {
              bgcolor: alpha(COLORS.primary, 0.9),
            }
          }}
        >
          Iniciar Sesión
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: alpha(COLORS.dark, 0.85),
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${alpha(COLORS.light, 0.08)}`,
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
          
          {/* Logo Area */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontWeight: 'bold', 
                color: COLORS.light, 
                letterSpacing: '-0.05em', 
                fontStyle: 'italic',
                cursor: 'pointer'
              }}
            >
              AB POS
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            {navItems.map((item) => (
              <Box 
                key={item.title} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer', 
                  transition: 'opacity 0.2s',
                  '&:hover': { opacity: 0.8 } 
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500, color: COLORS.light, fontSize: '0.95rem' }}>
                  {item.title}
                </Typography>
                {item.hasDropdown && <KeyboardArrowDownIcon sx={{ fontSize: 16, color: alpha(COLORS.light, 0.7), ml: 0.5 }} />}
              </Box>
            ))}
          </Box>

          {/* Action Buttons & Hamburger */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              href="#"
              sx={{ 
                display: { xs: 'none', sm: 'inline-flex' },
                bgcolor: COLORS.light, 
                color: COLORS.secondary, 
                fontWeight: 'bold',
                px: 4,
                py: 1,
                fontSize: '0.9rem',
                '&:hover': {
                  bgcolor: alpha(COLORS.light, 0.9),
                  boxShadow: `0 4px 14px ${alpha(COLORS.light, 0.3)}`,
                }
              }}
            >
              Iniciar Sesión
            </Button>
            
            <IconButton
              color="inherit"
              aria-label="abrir menú"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' }, color: COLORS.light }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
      
      {/* Mobile Drawer Navigation */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, bgcolor: COLORS.dark },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
