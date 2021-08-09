import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Contacto from './Contacto';
import Main from './Main'
import Footer from './components/Footer';
import Productos from './Productos';
import logo from './assets/logo.png'
function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <div className="container-fluid text-center back text-white">
        <h1 className="p-5">Vipanel</h1>
          <img src={logo}></img>
         
        </div>
        <div className="container">
        <Route path="/Vipanel" exact>
                <Main/>
            </Route>
          <Switch>
            <Route path="/Productos">
                 <Productos/>
            </Route>
            <Route path="/Contacto">
                  <Contacto/>
            </Route>

          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
