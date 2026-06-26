import React from 'react';
import { Box, Container, Typography, alpha, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../../theme';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';

const audience = ['Financial solutions distributors', 'ISOs', 'Commercial partners', 'Agents', 'Operations teams', 'Merchant networks'];
const industries = ['Restaurants and food service', 'Retail stores', 'Convenience stores', 'Grocery markets', 'Professional services', 'Beauty and wellness', 'Hospitality', 'Mobile businesses', 'Multi-location businesses', 'Small and medium-sized businesses'];

export const TargetAudience: React.FC = () => {
  return (
    <Box sx={{ py: 12, bgcolor: COLORS.dark }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          
          {/* Who It's For */}
          <Grid size={{ xs: 12, md: 5 }}  >
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                <PeopleIcon sx={{ color: COLORS.primary, fontSize: 40 }} />
                <Typography variant="h3" sx={{ color: COLORS.light }}>Who It's For</Typography>
              </Box>
              <Typography variant="body1" sx={{ color: alpha(COLORS.light, 0.7), mb: 4, fontSize: '1.1rem' }}>
                AB POS is designed for modern teams scaling their financial operations:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {audience.map((item) => (
                  <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Chip 
                      label={item} 
                      sx={{ 
                        bgcolor: alpha(COLORS.primary, 0.1), 
                        color: COLORS.light,
                        border: `1px solid ${alpha(COLORS.primary, 0.3)}`,
                        fontSize: '0.95rem',
                        py: 2.5,
                        px: 1,
                        borderRadius: '12px'
                      }} 
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Spacer */}
          <Grid size={{ xs: 12, md: 1 }}   sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ height: '100%', width: '1px', bgcolor: alpha(COLORS.light, 0.1), mx: 'auto' }} />
          </Grid>

          {/* Industries We Help */}
          <Grid size={{ xs: 12, md: 6 }}  >
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                <BusinessIcon sx={{ color: COLORS.accent, fontSize: 40 }} />
                <Typography variant="h3" sx={{ color: COLORS.light }}>Industries We Help</Typography>
              </Box>
              <Typography variant="body1" sx={{ color: alpha(COLORS.light, 0.7), mb: 4, fontSize: '1.1rem' }}>
                Supporting distributors and merchant networks serving diverse sectors:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {industries.map((item) => (
                  <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Chip 
                      label={item} 
                      sx={{ 
                        bgcolor: alpha(COLORS.accent, 0.1), 
                        color: COLORS.light,
                        border: `1px solid ${alpha(COLORS.accent, 0.3)}`,
                        fontSize: '0.95rem',
                        py: 2.5,
                        px: 1,
                        borderRadius: '12px'
                      }} 
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
