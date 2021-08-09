import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Contacto from './Contacto';
import Main from './Main'
import Footer from './components/Footer';
import Productos from './Productos';
function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <div className="container-fluid text-center back text-white">
        <h1 className="p-5">Vipanel</h1>
          <img src="./logo.png"></img>
         
        </div>
        <div className="container">
        <Route path="/" exact>
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
