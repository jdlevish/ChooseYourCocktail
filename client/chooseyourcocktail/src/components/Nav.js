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
                    <Navbar.Brand href="/choose" ><Logo className="svgLogo"></Logo><h4 className="navHeader float-right pt-4
                    ">Choose Your Cocktail</h4></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="ml-auto color-navbar ">








                        <NavDropdown title="Get Started" id="basic-nav-dropdown" className="float-left">

                            <NavDropdown.Item href="/Basics">Learn the Basics</NavDropdown.Item>
                            <NavDropdown.Item href="/choose">Choose your cocktail </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">What's New</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="/profile">User Profile</NavDropdown.Item> */}
                            <FavoritesButton />



                        </NavDropdown>
                    </Nav>
                    <FavoritesButton />
                    <AuthenticationButton />

                    {/* </Navbar.Collapse> */}
                </Navbar>
            </div >
        );
    }

}

export default NavBarHome;