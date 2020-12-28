import React, { Component, useState } from 'react';
//Boostrap
import { Container, Row, Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import $ from "jquery";
import CocktailList from './cocktaillist'




// component to allow user to chose the base liquor of the cocktail the user is looking for 
export default function LiquorChoice(props) {
    const [drinks, setDrinks] = useState([]);
    const [liquorValue, setLiquorValue] = useState("");




    async function handleClick(e) {
        // e.preventDefault();
        var liquor = liquorValue;
        try {
            const res = await $.ajax({
                url: "/api/cocktailAPI/" + liquor,
                method: "GET"

            })
            setDrinks(res)
            // console.log(drinks)
        } catch (e) { console.log(e) }

    }








    // handle click function that captures the name of liquor on button and sends it as parameter to api for call to cocktail database



    return (
        <div>
            <Container>

                <form>
                    <input type="text" name="liquor" value={liquorValue} onChange={(e) => { setLiquorValue(e.target.value) }} />
                    <Button className="btn btn-danger" onClick={() => { handleClick(liquorValue.toLowerCase()) }}>Search</Button>
                </form>



            </Container>
            <Container>
                <Row>

                    <CocktailList drinks={drinks} />

                </Row>

            </Container>

        </div>
    )
};


