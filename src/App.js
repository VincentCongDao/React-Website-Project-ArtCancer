// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Commnunity from './components/Commnunity';
import Donate from './components/Donate';
import Store from './components/Store';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar">
            <ul className="navbard">
              <h1>Welcome</h1>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/contact'} className="nav-link">Commnunity</Link></li>
              <li><Link to={'/donate'} className="nav-link">Donate</Link></li>
              <li><Link to={'/store'} className="nav-link">Store</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Commnunity} />
            <Route path='/donate' component={Donate} />
            <Route path='/store' component={Store} />
          </Switch>
          <div>
            <Footer />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;