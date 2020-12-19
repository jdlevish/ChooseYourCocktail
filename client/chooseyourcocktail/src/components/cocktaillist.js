import React, { Component } from 'react';
//Boostrap
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/short cocktail.svg'
import $ from "jquery";




// component to allow user to chose the base liquor of the cocktail the user is looking for 
class cocktaillist extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        // handle click function that captures the name of liquor on button and sends it as parameter to api for call to cocktail database

        function handleClick(e) {

            var liquor = e.target.childNodes[0].data;
            $.ajax({
                url: "/api/cocktailAPI/" + liquor,
                method: "GET",

            }).then((res) => {
                console.log(res);
            });
        }


        return (
            <div>
                <container>


                </container>

            </div>
        );
    }

}

export default cocktaillist;