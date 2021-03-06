import { createTheme } from '@mui/system';

export const theme = createTheme({
  palette: {
    mode: 'white',
  },
  typography: {
    fontFamily: [
      'Inter 400',
      'Inter 500',
      'Inter 600',
      'Manrope 500',
      'Manrope 700',
    ].join(','),
  },
});
