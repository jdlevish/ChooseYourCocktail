import React, { useEffect, useContext, useState } from 'react'
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { Col, Row, Image, Container } from "react-bootstrap";
// AUTH0
import { useAuth0 } from "@auth0/auth0-react";
import Home from './pages/home'
import Nav from './components/Nav'
import Choose from './pages/choose'
import Basics from './pages/theBasics'
import Liquor from './components/liquor'
import ingredients from './pages/ingredients'
import Profile from './pages/profile'
import Loading from './components/loading.js'
import ProtectedRoute from "./auth/protected-route";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import UserFavorites from './pages/userFavorites';
import { Context } from './functions/contexStore.js'
import Store from './functions/contexStore.js'
import CocktailWraper from './components/CocktailWraper.js'


function App() {


  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (

    <Store>



      <Nav />
      <CocktailWraper />

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

        <ProtectedRoute path='/Profile'>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/favorites'>
          <UserFavorites />
        </ProtectedRoute>




      </Switch>







    </Store >

  );
}

export default App;
