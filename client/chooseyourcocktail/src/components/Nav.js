import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "./authentication-button.js";
import FavoritesButton from "./FavoritesButton.js";








const NavBarHome = (props) => {
    const { isAuthenticated } = useAuth0();
    
   
       

        return isAuthenticated ? (
            <div className="">
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="/chooseAuth" ><h2 className="navHeader float-right pt-4
                    ">Choose Your Cocktail</h2></Navbar.Brand>
                    
                    <Nav className="ml-auto color-navbar ">

                    </Nav>
                    <FavoritesButton />
                    <AuthenticationButton  isAuthenticated={isAuthenticated}/>

                 
                </Navbar>
            </div >
        ):(
            <div className="">
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="/choose" ><h2 className="navHeader float-right pt-4
                    ">Choose Your Cocktail</h2></Navbar.Brand>
                    
                    <Nav className="ml-auto color-navbar ">

                    </Nav>
                    <FavoritesButton />
                    <AuthenticationButton  isAuthenticated={isAuthenticated}/>

                 
                </Navbar>
            </div >
        )
    }


export default NavBarHome;