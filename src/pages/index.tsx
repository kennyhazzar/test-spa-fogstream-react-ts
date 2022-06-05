import { Redirect, Route, Switch } from 'react-router-dom';
import FaqPage from './faq';
import MainPage from './main';
import NewsDetailsPage from './news-details';
import PreferencesPage from './preferences';

const Routing = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={MainPage}
    />
    <Route
      exact
      path="/:id"
      component={NewsDetailsPage}
    />
    <Route
      exact
      path="/preferences"
      component={PreferencesPage}
    />
    <Route
      exact
      path="/faq"
      component={FaqPage}
    />
    <Redirect to="/" />
  </Switch>
);

export default Routing;
