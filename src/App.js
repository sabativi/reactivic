import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Services = () => (
  <div>
    <h2>Services</h2>
  </div>
)

const Portofolio = ({ match }) => (
  <div>
    <h2>Portofolio</h2>
    <ul>
      <li>
        Lovebox
      </li>
      <li>
        Steadxp
      </li>
      <li>
        Webmecanik
      </li>
      <li>
        Grand prix de Serre Chevalier
      </li>
    </ul>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portofolio">Portofolio</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/portofolio" component={Portofolio}/>
      <Route path="/services" component={Services}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default App;
