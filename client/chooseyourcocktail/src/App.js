import logo from './logo.svg';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { Col, Row, Image, Container } from "react-bootstrap";
import Home from './pages/home'
import Choose from './pages/choose'
import Basics from './pages/theBasics'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>

      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/choose' component={Choose} />
        <Route path='/Basics' component={Basics} />

      </Switch>





    </div>
  );
}

export default App;
