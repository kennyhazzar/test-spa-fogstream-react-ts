import { ThemeProvider } from '@mui/material';
import { theme } from 'shared/lib/theme';
import Routing from '../pages';
import { withProviders } from './prodivers';
import './index.css';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  </div>
);

export default withProviders(App);
