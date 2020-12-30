import React, { Component, useState } from 'react';
//Boostrap
import { Container, Row, Button } from 'react-bootstrap';
import $ from "jquery";
import CocktailList from './cocktaillist'




// component to allow user to chose the base liquor of the cocktail the user is looking for 
export default function LiquorChoice(props) {
    const [drinks, setDrinks] = useState([]);
    const [liquorValue, setLiquorValue] = useState("");
    const [searchType, setSearchType] = useState("Liquor");
    // this function makes an api call to the express server to search cocktaildb api by liquor type
    async function search(liquorValue, searchType) {
        console.log(liquorValue, searchType)
        if (searchType === 'Liquor') {
            try {
                const res = await $.ajax({
                    url: "/api/cocktailAPI/" + liquorValue.toLowerCase(),
                    method: "GET"

                })
                // console.log(res)
                await setDrinks(res)
                // console.log(drinks)
            } catch (e) { console.log(e) }


        }

        else if (searchType === 'Ingredient') {
            try {
                const res = await $.ajax({
                    url: "/api/cocktailAPI/" + liquorValue.toLowerCase(),
                    method: "GET"

                })
                // console.log(res)
                await setDrinks(res)
                // console.log(drinks)
            } catch (e) { console.log(e) }


        }


        else if (searchType === 'Cocktail') {
            try {
                const res = await $.ajax({
                    url: "/api/cocktailAPI/Cocktail/" + liquorValue.toLowerCase(),
                    method: "GET"

                })
                // console.log("response : " + res)
                // let resArray = []
                // resArray.push(res);
                console.log("response :" + res[0])



                await setDrinks(res)
                // console.log(drinks)
            } catch (e) { console.log(e) }


        }


        if (searchType === 'Glass Type') {
            try {
                const res = await $.ajax({
                    url: "/api/cocktailAPI/glass/" + liquorValue.toLowerCase(),
                    method: "GET"

                })
                // console.log(res)
                await setDrinks(res)
                // console.log(drinks)
            } catch (e) { console.log(e) }


        }

    }


    // this function checks the keys pressed when input field is in focus and calls searchLiquor function when enter is pressed
    function handleKeyPress(e, liquorValue, searchType) {
        console.log(e.key)
        // console.log(liquorValue)
        if (e.key === 'Enter') {
            e.preventDefault()
            console.log(liquorValue)
            liquorValue = liquorValue
            search(liquorValue, searchType)
        }
        else {
            return
        }
    }
    // this function calls searchLiquor function when search button is clicked
    function handleSubmit(e, liquorValue, searchType) {
        e.preventDefault()
        liquorValue = liquorValue
        search(liquorValue, searchType);

    }








    // handle click function that captures the name of liquor on button and sends it as parameter to api for call to cocktail database



    return (
        <div>
            <Container>

                <form >
                    <input type="text" name="liquor" value={liquorValue} onKeyPress={(e) => handleKeyPress(e, liquorValue, searchType)} onChange={(e) => { setLiquorValue(e.target.value) }} />
                    <select value={searchType} onChange={(e) => { setSearchType(e.target.value) }}>
                        <option value="Liquor">Liquor</option>
                        <option value="Ingredient">Ingredient</option>
                        <option value="Cocktail">Cocktail</option>

                    </select>
                    <Button className="btn btn-danger" onClick={(e) => { handleSubmit(e, liquorValue, searchType) }}>Search</Button>
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


