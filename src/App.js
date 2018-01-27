import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Nav = require('./Nav');
var Home = require('./Home');
var About = require('./About')
var Flavorgen = require('./Flavorgen')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch

class App extends Component {
  render() {
    return (
//      <div className="App">
//       <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Feastyles</h1>
//        </header>

//      </div>

      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/get-started' component={About} />
            <Route exact path='/flavor-generator' component={Flavorgen} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
