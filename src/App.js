import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Grid } from 'react-bootstrap';

import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import Services from './pages/Services';
import Talks from './pages/Talks';

const AppLayout = ({ children }) => (
  <Grid fluid>
    { children }
  </Grid>
);

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Home} />
        <Route path="portofolio" component={Portofolio} />
        <Route path="services" component={Services} />
        <Route path="talks" component={Talks} />
    </Route>
  </Router>
)

export default App;
