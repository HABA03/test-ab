import React from 'react';
import { Box, Container, Typography, alpha, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export const TheSolution: React.FC = () => {
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
                color: COLORS.primary, 
                mb: 1.5, 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: 1.5,
                fontSize: '0.9rem'
              }}
            >
              La Solución
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
              Todo conectado en un solo ecosistema
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: alpha(COLORS.dark, 0.65), 
                maxWidth: 700, 
                mx: 'auto',
                fontSize: { xs: '1.05rem', md: '1.15rem' } 
              }}
            >
              Centraliza las operaciones financieras de tus comercios en una plataforma unificada y de alto rendimiento.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3.5}>
          
          {/* Card 1 (Destacada con Imagen): Pagos y Procesamiento */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
              style={{ height: '100%' }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' }, 
                  overflow: 'hidden',
                  borderColor: alpha(COLORS.primary, 0.15),
                  boxShadow: '0 10px 30px rgba(70, 114, 255, 0.03)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.1)}`,
                    borderColor: COLORS.primary
                  }
                }}
              >
                <CardContent sx={{ flex: 1.2, p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Box sx={{ color: COLORS.primary, mb: 2, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.primary, 0.08), width: 'fit-content' }}>
                    <PaymentIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography variant="h5" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1.5 }}>
                    Pagos y Procesamiento Digital
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.6 }}>
                    Acepta todo tipo de tarjetas y métodos de pago sin fricciones. Integración ágil con terminales inteligentes y pasarelas de pago robustas y seguras.
                  </Typography>
                </CardContent>
                <Box 
                  sx={{ 
                    flex: 1, 
                    minHeight: { xs: 200, sm: 'auto' }, 
                    backgroundImage: 'url(/contactless_payment.png)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }} 
                />
              </Card>
            </motion.div>
          </Grid>

          {/* Card 2: Programas Flexibles */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ height: '100%' }}
            >
              <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 4, '&:hover': { transform: 'translateY(-5px)', borderColor: COLORS.primary, boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.08)}` } }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ color: COLORS.primary, mb: 2.5, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.primary, 0.08) }}>
                    <SettingsSuggestIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1.5 }}>
                    Programas Flexibles
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.6 }}>
                    Estructuras de comisiones adaptables según los requerimientos de tu portafolio y tu estrategia comercial.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Card 3: Flat Rate & Interchange Plus */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ height: '100%' }}
            >
              <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 4, '&:hover': { transform: 'translateY(-5px)', borderColor: COLORS.primary, boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.08)}` } }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ color: COLORS.primary, mb: 2.5, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.primary, 0.08) }}>
                    <PointOfSaleIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1.5 }}>
                    Esquemas de Precios
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.6 }}>
                    Alterna de manera nativa entre esquemas de Tarifa Plana (Flat Rate) e Interchange Plus para maximizar márgenes.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Card 4 (Destacada con Imagen): Gestión de Comercios */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ height: '100%' }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row-reverse' }, 
                  overflow: 'hidden',
                  borderColor: alpha(COLORS.primary, 0.15),
                  boxShadow: '0 10px 30px rgba(70, 114, 255, 0.03)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.1)}`,
                    borderColor: COLORS.primary
                  }
                }}
              >
                <CardContent sx={{ flex: 1.2, p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Box sx={{ color: COLORS.primary, mb: 2, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.primary, 0.08), width: 'fit-content' }}>
                    <StorefrontIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography variant="h5" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1.5 }}>
                    Gestión Integral de Comercios
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.6 }}>
                    Control de altas de comercios, configuración de terminales y soporte administrativo simplificado dentro de un entorno unificado.
                  </Typography>
                </CardContent>
                <Box 
                  sx={{ 
                    flex: 1, 
                    minHeight: { xs: 200, sm: 'auto' }, 
                    backgroundImage: 'url(/restaurant_pos.png)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }} 
                />
              </Card>
            </motion.div>
          </Grid>

          {/* Card 5: Socios Comerciales */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ height: '100%' }}
            >
              <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 4, '&:hover': { transform: 'translateY(-5px)', borderColor: COLORS.primary, boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.08)}` } }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ color: COLORS.primary, mb: 2.5, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.primary, 0.08) }}>
                    <HandshakeIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                    Fuerza de Ventas
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.5, fontSize: '0.85rem' }}>
                    Control de agentes comerciales, comisiones devengadas y herramientas de captación dedicadas.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Card 6: Soporte Técnico */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ height: '100%' }}
            >
              <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 4, '&:hover': { transform: 'translateY(-5px)', borderColor: COLORS.primary, boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.08)}` } }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ color: COLORS.primary, mb: 2.5, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.primary, 0.08) }}>
                    <SupportAgentIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                    Soporte y Operación
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.5, fontSize: '0.85rem' }}>
                    Herramientas ágiles de asistencia técnica y administración para mantener tu red activa y satisfecha.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Card 7: Reportes Financieros */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ height: '100%' }}
            >
              <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 4, '&:hover': { transform: 'translateY(-5px)', borderColor: COLORS.primary, boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.08)}` } }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ color: COLORS.primary, mb: 2.5, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.primary, 0.08) }}>
                    <AnalyticsIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                    Métricas y Reportes
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.5, fontSize: '0.85rem' }}>
                    Auditorías, volúmenes de transacciones y conciliaciones de depósitos detallados.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Card 8: Herramientas SaaS */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ height: '100%' }}
            >
              <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 4, '&:hover': { transform: 'translateY(-5px)', borderColor: COLORS.primary, boxShadow: `0 15px 35px ${alpha(COLORS.primary, 0.08)}` } }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ color: COLORS.primary, mb: 2.5, display: 'inline-flex', p: 1, borderRadius: 2, bgcolor: alpha(COLORS.primary, 0.08) }}>
                    <CloudSyncIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                    Herramientas SaaS
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha(COLORS.dark, 0.65), lineHeight: 1.5, fontSize: '0.85rem' }}>
                    Sincronización en la nube y utilidades administrativas dedicadas para escalar sin límites.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
