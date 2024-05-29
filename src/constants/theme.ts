import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2667D3', // Основной синий
    },
    secondary: {
      main: '#0055BF', // Вторичный синий
    },
    text: {
      primary: '#333333', // Основной текст (темный серый)
      secondary: '#FFFFFF', // Вторичный белый
    },
    success: {
      // main: '#2DE28C', // Зеленый
      main: '#FFA726', // Оранжевый
    },
    background: {
      default: '#F7F8F9', // Светло-серый фон
      paper: '#C6DBE6', // Светло-голубой фон для подложек
    },
  },
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1545,
    },
  },
});
