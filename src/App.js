import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import logo from './logo.svg';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Navbar />
      </div>
    );
  }
}

export class Navbar extends Component{
   render() {
      return (
        <Router>
          <div className="main-wrapper">
            <nav className = "navbar navbar-default">
              <div className = "container top-pad">
                <div className = "navbar-header">
                  <Link className = "navbar-brand" to="/">
                     <img src={logo} width="150" alt="logo"/>
                  </Link>
                </div>

                <div className = "collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className = "nav navbar-nav">
                     <li className = "nav-home"><Link to="/">Home</Link></li>
                     <li className = "nav-about"><Link to="/about">About</Link></li>
                     <li className = "nav-contact"><Link to="/contact">Contact</Link></li>
                     <li className = "nav-contact"><Link to="/login">Login</Link></li>
                  </ul>
                  <div className = "navbar-timer pull-right" id="timer">Timer:</div>
                </div>
              </div>
            </nav>
            <div className="page-wrapper">
              <Route exact path={"/"} component={Home} />    
              <Route path={"/contact"} component={Contact} />    
              <Route path={"/home"} component={Home} />
              <Route path={"/about"} component={About} />
              <Route path={"/login"} component={Login} />
              <Footer />
            </div>
          </div>
        </Router>
      )
   }
}

function timer() {
  const element = (
    <span>Timer:{new Date().toLocaleTimeString()}</span>
  );
  ReactDOM.render(element, document.getElementById('timer'));
}

setInterval(timer, 1000);

export default App;
