import React, { Component, useState } from 'react';
//Boostrap
import { Container, Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
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
                <button onClick={handleClick}>Vodka</button>
                <button onClick={handleClick}>Gin</button>
                <button onClick={handleClick}>Rum</button>
                <button onClick={handleClick}>Whiskey</button>
                <button onClick={handleClick}>Scotch</button>
                <button onClick={handleClick}>Bourbon</button>
                <button onClick={handleClick}>Tequila</button>
                <button onClick={handleClick}>Mezcal</button>
                <button onClick={handleClick}>Sherry</button>
                <button onClick={handleClick}>Absinthe</button>
                <button onClick={handleClick}>Irish Cream</button>
                <button onClick={handleClick}>Kahlua</button>


            </Container>
            <Container>
                <CocktailList drinks={drinks} />
            </Container>

        </div>
    )
};


