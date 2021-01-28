import logo from './logo.svg';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { Col, Row, Image, Container } from "react-bootstrap";
// AUTH0
import Home from './pages/home'
import Nav from './components/Nav'
import Choose from './pages/choose'
import Basics from './pages/theBasics'
import Liquor from './components/liquor'
import ingredients from './pages/ingredients'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>
      <Nav />

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/choose' >
          <Choose />
        </Route>
        <Route path='/Basics/ingredients' >
          <ingredients />
        </Route>
        <Route path='/Basics/liquor'>
          <Liquor />
        </Route>
        <Route path='/Basics'>
          <Basics />
        </Route>


      </Switch>





    </div>
  );
}

export default App;
