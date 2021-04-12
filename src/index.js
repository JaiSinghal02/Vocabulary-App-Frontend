import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

axios.defaults.baseURL="http://localhost:5000/"

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#622449',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  status: {
    danger: '#622449',
  },
  typography: {
    fontFamily: [
      'Kumbh Sans', 'sans-serif'
    ].join(','),
  },
});
ReactDOM.render(
  <ThemeProvider theme={theme}>

    <App />
  </ThemeProvider>,
  document.getElementById('root')
);