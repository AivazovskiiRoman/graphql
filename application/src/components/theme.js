import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    color: '#fff',
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#0f9231'
    },
    secondary: green,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    contrastText: '#fff',
  }
});
