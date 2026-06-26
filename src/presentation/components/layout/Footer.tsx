import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, alpha, Divider } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { COLORS } from '../../theme';

const footerLinks = [
  {
    title: 'Producto',
    links: ['Punto de Venta', 'Gestión de Mesas', 'Reportes y Analítica', 'Control de Personal', 'Gestión de Menú', 'Creador de Pizzas', 'Integración de Pagos', 'POS Portátil', 'Pantalla de Cocina (KDS)', 'POS para Minoristas', 'Tarjetas de Regalo']
  },
  {
    title: 'Pedidos sin Contacto',
    links: ['Pedidos y Pago Móvil NUV', 'Pedidos por Código QR', 'Restaurante Virtual', 'Pedidos para Recoger', 'Pedidos para Llevar', 'Pedidos a Domicilio']
  },
  {
    title: 'Servicios para Comercios',
    links: ['Pago NUV', 'En Tu Tienda', 'En Tu Sitio Web', 'En Tu Aplicación', 'Pagos en Línea', 'Programas de Pago NUV']
  },
  {
    title: 'Sectores',
    links: ['Restaurantes', 'Pizzerías', 'Bares y Discotecas', 'Corporativos', 'Servicio Rápido', 'Cafeterías y Panaderías']
  },
  {
    title: 'Recursos',
    links: ['Acceso al Blog', 'Precios', 'Ebooks', 'Rescate de Comercios']
  },
  {
    title: 'Socios',
    links: ['Programa de Socios', 'Beneficios para Socios', 'Programas para Clientes', 'Anexo A']
  },
  {
    title: 'Empresa',
    links: ['Sobre Nosotros', 'Contacto', 'Preguntas Frecuentes', 'Bolsa de Trabajo', 'Formulario para Socios']
  }
];

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: COLORS.dark, pt: 10, pb: 4, color: COLORS.light }}>
      <Container maxWidth="xl">
        
        {/* Help Section Card */}
        <Box 
          sx={{ 
            background: `linear-gradient(90deg, ${alpha(COLORS.secondary, 0.4)} 0%, ${alpha(COLORS.primary, 0.2)} 100%)`,
            borderRadius: 4, 
            p: 4, 
            mb: 8,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            border: `1px solid ${alpha(COLORS.accent, 0.2)}`
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: { xs: 3, md: 0 } }}>
            <HeadsetMicIcon sx={{ fontSize: 40, color: COLORS.accent }} />
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
              ¿Cómo podemos ayudarte?
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: { xs: 3, md: 6 }, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.6), fontWeight: 'bold' }}>
                Soporte Técnico:
              </Typography>
              <Typography variant="body2" sx={{ color: COLORS.light, mt: 0.5 }}>(888) 330-3974 ext 1 | Inglés</Typography>
              <Typography variant="body2" sx={{ color: COLORS.light }}>(888) 330-3974 ext 2 | Español</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.6), fontWeight: 'bold' }}>
                Contacto de Ventas:
              </Typography>
              <Typography variant="body2" sx={{ color: COLORS.light, mt: 0.5 }}>(888) 338-0620</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.6), fontWeight: 'bold' }}>
                Servicio para Comercios:
              </Typography>
              <Typography variant="body2" sx={{ color: COLORS.light, mt: 0.5 }}>(888) 338-0620 ext 3</Typography>
            </Box>
          </Box>
        </Box>

        {/* Links Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {footerLinks.map((column) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 1.7 }} key={column.title}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 3, color: COLORS.accent, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {column.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {column.links.map((link) => (
                  <MuiLink 
                    key={link} 
                    href="#" 
                    underline="hover" 
                    sx={{ color: alpha(COLORS.light, 0.6), fontSize: '0.8rem', '&:hover': { color: COLORS.light } }}
                  >
                    {link}
                  </MuiLink>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: alpha(COLORS.light, 0.1), mb: 4 }} />

        {/* Copyright & Legal */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: { xs: 'flex-start', md: 'center' }, 
            gap: 4 
          }}
        >
          <Box sx={{ maxWidth: '800px' }}>
            <Typography variant="caption" sx={{ color: alpha(COLORS.light, 0.4), fontSize: '0.7rem', lineHeight: 1.6, display: 'block' }}>
              Copyright © AB POS Solutions. Todos los derechos reservados. AB POS Solutions es una Organización de Ventas Independiente (ISO) registrada de PNC Bank, National Association, Pittsburgh, PA. | Todos los programas de procesamiento requieren un Contrato de Procesamiento de Transacciones Comerciales. El programa de punto de venta gratuito también requiere un Contrato de Servicio del Sistema AB POS. Consulte los Términos y Condiciones del Contrato de Procesamiento y del Contrato de Servicio para obtener detalles completos.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>
            {['Términos y Condiciones', 'Declaración de Privacidad', 'Términos de Servicio'].map((text) => (
              <MuiLink key={text} href="#" underline="hover" sx={{ color: alpha(COLORS.light, 0.5), fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                {text}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
