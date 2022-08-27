import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/x-date-pickers';


export const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
    esES,
  );

  
const day = new Date();

export const minDay = day.setDate(day.getDate() + 1);
