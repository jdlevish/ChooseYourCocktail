import React, { Component } from 'react';
//Boostrap
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/cycLogo.svg'





class NavBarHome extends Component {
    constructor(props) {
        super(props);


    }

    render() {


        return (
            <div>
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="/" ><Logo className="svgLogo"></Logo><h1 className="navHeader float-right pt-4
                    ">Choose Your Cocktail</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto color-navbar">

                            <NavDropdown title="Get Started" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Basics">Learn the Basics</NavDropdown.Item>
                                <NavDropdown.Item href="/choose">Choose your cocktail </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">What's New</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    }

}

export default NavBarHome;