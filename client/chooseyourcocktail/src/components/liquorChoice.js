import React, { Component, useState } from 'react';
//Boostrap
import { Container, Row, Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import $ from "jquery";
import CocktailList from './cocktaillist'




// component to allow user to chose the base liquor of the cocktail the user is looking for 
export default function LiquorChoice(props) {
    const [drinks, setDrinks] = useState([]);
    const [liquorValue, setLiquorValue] = useState("");

    // this function makes an api call to the express server to search cocktaildb api by liquor type
    async function searchLiquor(liquorValue) {
        console.log(liquorValue)
        try {
            const res = await $.ajax({
                url: "/api/cocktailAPI/" + liquorValue.toLowerCase(),
                method: "GET"

            })
            // console.log(res)
            await setDrinks(res)
            console.log(drinks)
        } catch (e) { console.log(e) }


    }

    // this function checks the keys pressed when input field is in focus and calls searchLiquor function when enter is pressed
    function handleKeyPress(e, liquorValue) {
        console.log(e.key)
        // console.log(liquorValue)
        if (e.key === 'Enter') {
            e.preventDefault()
            console.log(liquorValue)
            liquorValue = liquorValue
            searchLiquor(liquorValue)
        }
        else {
            return
        }
    }
    // this function calls searchLiquor function when search button is clicked
    function handleSubmit(e, liquorValue) {
        e.preventDefault()
        liquorValue = liquorValue
        searchLiquor(liquorValue);

    }








    // handle click function that captures the name of liquor on button and sends it as parameter to api for call to cocktail database



    return (
        <div>
            <Container>

                <form >
                    <input type="text" name="liquor" value={liquorValue} onKeyPress={(e) => handleKeyPress(e, liquorValue)} onChange={(e) => { setLiquorValue(e.target.value) }} />
                    <Button className="btn btn-danger" onClick={(e) => { handleSubmit(e, liquorValue) }}>Search</Button>
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


