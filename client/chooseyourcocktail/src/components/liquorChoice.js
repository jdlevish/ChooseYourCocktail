import React, { Component, useState } from 'react';
//Boostrap
import { Container, Row, Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import $ from "jquery";
import CocktailList from './cocktaillist'




// component to allow user to chose the base liquor of the cocktail the user is looking for 
export default function LiquorChoice(props) {
    const [drinks, setDrinks] = useState([]);

    async function handleClick(e) {

        var liquor = e.target.childNodes[0].data;
        try {
            const res = await $.ajax({
                url: "/api/cocktailAPI/" + liquor,
                method: "GET"

            })
            setDrinks(res)
        } catch (e) { console.log(e) }

    }








    // handle click function that captures the name of liquor on button and sends it as parameter to api for call to cocktail database



    return (
        <div>
            <Container>
                <button className="btn btn-outline-danger" onClick={handleClick}>Vodka</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Gin</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Rum</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Whiskey</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Scotch</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Bourbon</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Tequila</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Mezcal</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Sherry</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Absinthe</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Irish Cream</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>Kahlua</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>campari</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>aperol</button>
                <button className="btn btn-outline-danger" onClick={handleClick}>brandy</button>





            </Container>
            <Container>
                <Row>

                    <CocktailList drinks={drinks} />

                </Row>

            </Container>

        </div>
    )
};


