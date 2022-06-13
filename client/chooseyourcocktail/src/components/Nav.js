import React, { Component } from 'react';
//Boostrap
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/cycLogo.svg';
import AuthenticationButton from "./authentication-button.js";
import FavoritesButton from "./FavoritesButton.js";

import SignupButton from './signup-button.js';
import ProfileButton from './profileButton.js'
import { useAuth0 } from "@auth0/auth0-react";






class NavBarHome extends Component {
    constructor(props) {
        super(props);


    }

    render() {


        return (
            <div className="">
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="/choose" ><h2 className="navHeader float-right pt-4
                    ">Choose Your Cocktail</h2></Navbar.Brand>
                    
                    <Nav className="ml-auto color-navbar ">

                    </Nav>
                    <FavoritesButton />
                    <AuthenticationButton />

                 
                </Navbar>
            </div >
        );
    }

}

export default NavBarHome;