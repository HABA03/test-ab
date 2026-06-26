import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, alpha, Divider } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { COLORS } from '../../theme';
import { useLanguage } from '../../../shared/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

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
              {t.footer.help}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: { xs: 3, md: 6 }, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.6), fontWeight: 'bold' }}>
                {t.footer.support}
              </Typography>
              <Typography variant="body2" sx={{ color: COLORS.light, mt: 0.5 }}>(888) 330-3974 ext 1 | {t.footer.english}</Typography>
              <Typography variant="body2" sx={{ color: COLORS.light }}>(888) 330-3974 ext 2 | {t.footer.spanish}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.6), fontWeight: 'bold' }}>
                {t.footer.sales}
              </Typography>
              <Typography variant="body2" sx={{ color: COLORS.light, mt: 0.5 }}>(888) 338-0620</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: alpha(COLORS.light, 0.6), fontWeight: 'bold' }}>
                {t.footer.merchant}
              </Typography>
              <Typography variant="body2" sx={{ color: COLORS.light, mt: 0.5 }}>(888) 338-0620 ext 3</Typography>
            </Box>
          </Box>
        </Box>

        {/* Links Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {t.footer.columns.map((column) => (
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
              {t.footer.copyright}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>
            {t.footer.legal.map((text) => (
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
