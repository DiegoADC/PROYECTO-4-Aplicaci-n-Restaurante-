import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import esLocale from 'date-fns/locale/es';
import './ReserveSearchDate.css';
import { theme, minDay } from '../../../../helpers/themePicker';

export const ReserveSearchDate = ({valueDate, setValueDate, handleDate, values, setValues}) => {


  return (
  <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
        <Stack spacing={1}>
            <DatePicker className='ReserveSearch-date' minDate={minDay} views={['day', 'month', 'year']} value={valueDate} onAccept={() => handleDate(valueDate, values, setValues)} onChange={(newValue) => { setValueDate(newValue)}} renderInput={(params) => <TextField {...params} helperText={null} />}/>
        </Stack>
      </LocalizationProvider>
  </ThemeProvider>
  );
};

