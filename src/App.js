import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Grid } from 'react-bootstrap';

import Header from './layouts/Header';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';

const Services = () => (
  <div>
    <h2>Services</h2>
  </div>
)

const AppLayout = ({ children }) => (
  <div>
    <Header />
    <Grid>
      { children }
    </Grid>
  </div>
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
