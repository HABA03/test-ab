import React from 'react';
import { Box, Container, Typography, alpha, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContactlessIcon from '@mui/icons-material/Contactless';
import BarChartIcon from '@mui/icons-material/BarChart';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import LinkIcon from '@mui/icons-material/Link';

const rightSolutions = [
  { text: 'Pagos Digitales', desc: 'Acepta tarjetas sin contacto, Apple Pay y billeteras digitales.', icon: <ContactlessIcon /> },
  { text: 'Reportes en Vivo', desc: 'Supervisa ventas, facturación y turnos en tiempo real.', icon: <BarChartIcon /> },
  { text: 'Pantallas de Cocina (KDS)', desc: 'Optimiza la comunicación entre meseros y cocina al instante.', icon: <KitchenIcon /> },
  { text: 'Pantalla para el Cliente', desc: 'Transparencia total en el checkout para fidelizar clientes.', icon: <DisplaySettingsIcon /> },
  { text: 'Enlaces de Pago', desc: 'Crea y comparte links de cobro seguros por chat o correo.', icon: <LinkIcon /> },
  { text: 'Gestión Minorista', desc: 'Control de inventario, stock y proveedores simplificado.', icon: <ShoppingBagIcon /> },
];

export const MerchantSolutions: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF', position: 'relative' }}>
      <Container maxWidth="lg">
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
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
              Tecnología Comercial
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2.5, 
                color: COLORS.dark, 
                fontWeight: 850,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2
              }}
            >
              Soluciones para Comercios
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: alpha(COLORS.dark, 0.7), 
                maxWidth: 700, 
                mx: 'auto',
                fontSize: { xs: '1.05rem', md: '1.15rem' } 
              }}
            >
              Herramientas avanzadas que permiten a los comercios de tu red operar de manera más eficiente y vender más.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          
          {/* Tarjeta Destacada con Imagen en la Izquierda */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              style={{ height: '100%' }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  overflow: 'hidden',
                  borderColor: alpha(COLORS.accent, 0.15),
                  boxShadow: '0 10px 30px rgba(168, 130, 257, 0.02)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 15px 35px ${alpha(COLORS.accent, 0.12)}`,
                    borderColor: COLORS.accent
                  }
                }}
              >
                <Box 
                  sx={{ 
                    height: { xs: 240, sm: 300, lg: '350px' }, 
                    backgroundImage: 'url(/restaurant_pos.png)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }} 
                />
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
                  <Box sx={{ color: COLORS.accent, mb: 2, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.accent, 0.08), width: 'fit-content' }}>
                    <RestaurantIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography variant="h5" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1.5 }}>
                    Puntos de Venta para Restaurantes y Retail
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.6 }}>
                    Software de cobro especializado y terminales inteligentes diseñados para optimizar la velocidad del servicio, mapas de mesas, envío de comandas, propinas y administración de inventarios en tiendas minoristas.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Cuadrícula de Tarjetas en la Derecha */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={3} sx={{ height: '100%' }}>
              {rightSolutions.map((solution, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index} sx={{ display: 'flex' }}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    style={{ width: '100%', display: 'flex' }}
                  >
                    <Card 
                      sx={{ 
                        width: '100%',
                        p: 3, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        borderRadius: 4, 
                        borderColor: alpha(COLORS.dark, 0.06),
                        boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
                        transition: 'all 0.3s ease',
                        '&:hover': { 
                          transform: 'translateY(-4px)', 
                          borderColor: COLORS.accent, 
                          boxShadow: `0 10px 25px ${alpha(COLORS.accent, 0.08)}`,
                          bgcolor: alpha(COLORS.accent, 0.01)
                        } 
                      }}
                    >
                      <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ color: COLORS.accent, mb: 2, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.accent, 0.08), width: 'fit-content', '& > svg': { fontSize: 24 } }}>
                          {solution.icon}
                        </Box>
                        <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                          {solution.text}
                        </Typography>
                        <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.6), lineHeight: 1.5, fontSize: '0.85rem' }}>
                          {solution.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
