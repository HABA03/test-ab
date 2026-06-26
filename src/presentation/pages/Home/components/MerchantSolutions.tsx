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

const solutions = [
  { text: 'Restaurants', icon: <RestaurantIcon /> },
  { text: 'Retail', icon: <ShoppingBagIcon /> },
  { text: 'Digital payments', icon: <ContactlessIcon /> },
  { text: 'Reporting', icon: <BarChartIcon /> },
  { text: 'KDS', icon: <KitchenIcon /> },
  { text: 'Customer Display', icon: <DisplaySettingsIcon /> },
  { text: 'Payment Links', icon: <LinkIcon /> },
];

export const MerchantSolutions: React.FC = () => {
  return (
    <Box sx={{ py: 12, bgcolor: COLORS.dark }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Typography variant="h6" sx={{ color: COLORS.accent, mb: 1, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>
              Tools
            </Typography>
            <Typography variant="h2" sx={{ mb: 2, color: COLORS.light }}>
              Merchant Solutions
            </Typography>
            <Typography variant="h6" sx={{ color: alpha(COLORS.light, 0.7), fontWeight: 400 }}>
              Tools that help merchants within your network operate better:
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {solutions.map((solution, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }}    key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    bgcolor: alpha(COLORS.secondary, 0.05),
                    border: `1px solid ${alpha(COLORS.accent, 0.1)}`,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.02)',
                      boxShadow: `0 8px 30px ${alpha(COLORS.accent, 0.2)}`,
                      border: `1px solid ${alpha(COLORS.accent, 0.4)}`,
                      bgcolor: alpha(COLORS.secondary, 0.15),
                    }
                  }}
                >
                  <CardContent sx={{ p: '0 !important' }}>
                    <Box sx={{ color: COLORS.accent, mb: 2, '& > svg': { fontSize: 48 } }}>
                      {solution.icon}
                    </Box>
                    <Typography variant="subtitle1" sx={{ color: COLORS.light, fontWeight: 600 }}>
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
