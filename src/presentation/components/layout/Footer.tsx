import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, alpha, Divider } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { COLORS } from '../../theme';

const footerLinks = [
  {
    title: 'Product',
    links: ['Point Of Sale', 'Table Management', 'Analytics & Reporting', 'Staff Management', 'Menu Management', 'Pizza Builder', 'Integrate Payment', 'Handheld POS', 'Kitchen Display', 'Retail POS', 'Gift Cards']
  },
  {
    title: 'Contactless Ordering',
    links: ['NUV Mobile Ordering And Pay', 'QR Code Ordering', 'Virtual Restaurant', 'Contactless Pickup Ordering', 'Contactless Takeout Ordering', 'Contactless Delivery Ordering']
  },
  {
    title: 'Merchant Services',
    links: ['NUV Payment', 'In Your Store', 'On Your Website', 'Through Your APP', 'Online Payment', 'NUV Payment Programs']
  },
  {
    title: 'Industries',
    links: ['Restaurant', 'Pizza', 'Bar and Nightclub', 'Enterprise', 'Quick Service', 'Cafe and Bakery']
  },
  {
    title: 'Resources',
    links: ['Blog Login', 'Pricing', 'Ebooks', 'M/V Rescue']
  },
  {
    title: 'Partner',
    links: ['Partner Program', 'Partner Benefits', 'Clients Programs', 'Schedule A']
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact Us', 'FAQ', 'Careers Form', 'Partner Form']
  }

  
];

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: COLORS.dark, pt: 10, pb: 4 }}>
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <HeadsetMicIcon sx={{ fontSize: 40, color: COLORS.accent }} />
            <Typography variant="h4" sx={{ fontWeight: 600 }}>How can we help you?</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 8 }, mt: { xs: 4, md: 0 }, flexWrap: 'wrap' }}>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.7) }}>Technical Support:</Typography>
              <Typography variant="body1">(888) 330-3974 ext 1 | English</Typography>
              <Typography variant="body1">(888) 330-3974 ext 2 | Spanish</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.7) }}>Contact Sales:</Typography>
              <Typography variant="body1">(888) 338-0620</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.7) }}>Merchant Service:</Typography>
              <Typography variant="body1">(888) 338-0620 ext 3</Typography>
            </Box>
          </Box>
        </Box>

        {/* Links Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {footerLinks.map((column) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }}    key={column.title}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 3, color: COLORS.accent }}>
                {column.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {column.links.map((link) => (
                  <MuiLink 
                    key={link} 
                    href="#" 
                    underline="hover" 
                    sx={{ color: alpha(COLORS.light, 0.6), fontSize: '0.85rem', '&:hover': { color: COLORS.light } }}
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
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2 }}>
          <Box sx={{ maxWidth: '800px' }}>
            <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.5), fontSize: '0.75rem', lineHeight: 1.6 }}>
              Copyright © AB POS Solutions. All rights reserved. AB POS Solutions is a registered Independent Sales Organization (ISO) of PNC Bank, National Association, Pittsburgh, PA. | All processing programs require a Merchant Transaction Processing Agreement. The free point-of-sale program also requires a AB POS System Service Agreement. See Processing Agreement and Service Agreement Terms and Conditions for complete details.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Terms and Conditions', 'Privacy Statement', 'Contactless Ordering Terms of Services'].map((text) => (
              <MuiLink key={text} href="#" underline="hover" sx={{ color: alpha(COLORS.light, 0.6), fontSize: '0.75rem' }}>
                {text}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
