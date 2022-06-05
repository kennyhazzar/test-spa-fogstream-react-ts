import Routing from './pages';
import { withProviders } from './prodivers';

const App = () => (
  <div>
    <Routing />
  </div>
);

export default withProviders(App);
