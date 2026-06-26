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

const solutions = [
  { text: 'Payments and processing', icon: <PaymentIcon /> },
  { text: 'Flexible processing programs', icon: <SettingsSuggestIcon /> },
  { text: 'Flat Rate & Interchange Plus', icon: <PointOfSaleIcon /> },
  { text: 'Merchant management', icon: <StorefrontIcon /> },
  { text: 'Sales and partners', icon: <HandshakeIcon /> },
  { text: 'Operations and support', icon: <SupportAgentIcon /> },
  { text: 'Reporting and analytics', icon: <AnalyticsIcon /> },
  { text: 'SaaS tools', icon: <CloudSyncIcon /> },
];

export const TheSolution: React.FC = () => {
  return (
    <Box sx={{ py: 12, bgcolor: COLORS.dark, position: 'relative' }}>
      {/* Decorative Glow */}
      <Box 
        sx={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '60vw',
          background: `radial-gradient(circle, ${alpha(COLORS.primary, 0.15)} 0%, transparent 60%)`,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Typography variant="h6" sx={{ color: COLORS.primary, mb: 1, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>
              The Solution
            </Typography>
            <Typography variant="h3" sx={{ mb: 2, color: COLORS.light }}>
              Everything connected in one ecosystem.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {solutions.map((solution, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }}    key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    bgcolor: alpha(COLORS.secondary, 0.1),
                    border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 24px ${alpha(COLORS.primary, 0.2)}`,
                      border: `1px solid ${alpha(COLORS.primary, 0.5)}`,
                      bgcolor: alpha(COLORS.secondary, 0.2),
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: COLORS.primary, mb: 2, '& > svg': { fontSize: 36 } }}>
                      {solution.icon}
                    </Box>
                    <Typography variant="body1" sx={{ color: COLORS.light, fontWeight: 500, lineHeight: 1.4 }}>
                      {solution.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
