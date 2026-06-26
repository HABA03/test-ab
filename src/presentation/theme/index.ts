import { createTheme, alpha } from '@mui/material/styles';

// Extendiendo la paleta de colores para incluir el Accent/Purple Light
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

// Extendiendo el tema para tener acceso a los colores en los componentes
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

// Colores Corporativos
export const COLORS = {
  primary: '#4672FF',
  secondary: '#641ADD',
  dark: '#080A3B',
  light: '#FEFEFE',
  accent: '#A882ED',
  gradient: 'linear-gradient(17deg, rgba(57, 4, 124, 1) 2%, rgba(13, 0, 38, 1) 46%, rgba(82, 39, 145, 1) 73%, rgba(116, 93, 235, 1) 100%)',
};

/**
 * Configuración central del Sistema de Diseño (MUI Theme) para AB POS.
 * Se aplican altos contrastes y tipografía Poppins para garantizar
 * limpieza visual y una estética Fintech futurista (modo oscuro primario).
 */
const theme = createTheme({
  palette: {
    mode: 'dark', // Fintech futurista se beneficia enormemente del modo oscuro
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    accent: {
      main: COLORS.accent,
      contrastText: '#fff',
    },
    background: {
      default: COLORS.dark, // Usamos el dark de base para todo
      paper: alpha(COLORS.dark, 0.8), // Efecto glass/cards
    },
    text: {
      primary: COLORS.light,
      secondary: alpha(COLORS.light, 0.7),
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    button: {
      textTransform: 'none', // Estilo más moderno y limpio, menos corporativo antiguo
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12, // Curvas sutiles para elementos futuristas pero amigables
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: COLORS.dark,
          color: COLORS.light,
          // Evitamos el scroll horizontal si hay elementos muy anchos
          overflowX: 'hidden', 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px', // Forma de píldora (pill-shape) típica para SaaS moderno
          padding: '10px 24px',
          boxShadow: 'none', // Diseño flat
          '&:hover': {
            boxShadow: `0 8px 24px ${alpha(COLORS.primary, 0.4)}`, // Efecto Glow (brillo)
          },
        },
        contained: {
          background: COLORS.primary,
          '&:hover': {
            background: alpha(COLORS.primary, 0.9),
          },
        },
        outlined: {
          borderColor: alpha(COLORS.light, 0.3),
          color: COLORS.light,
          '&:hover': {
            backgroundColor: alpha(COLORS.light, 0.05),
            borderColor: COLORS.light,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: alpha(COLORS.secondary, 0.1),
          backdropFilter: 'blur(10px)',
          border: `1px solid ${alpha(COLORS.light, 0.1)}`,
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
