import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Grid } from 'react-bootstrap';

import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import Services from './pages/Services';

const AppLayout = ({ children }) => (
  <Grid fluid>
    { children }
  </Grid>
);

AppLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Home} />
      <Route path="portofolio" component={Portofolio} />
      <Route path="services" component={Services} />
    </Route>
  </Router>
)

export default App;
