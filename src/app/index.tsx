import Routing from '../pages';
import { withProviders } from './prodivers';
import './index.css';

const App = () => (
  <div>
    <Routing />
  </div>
);

export default withProviders(App);
