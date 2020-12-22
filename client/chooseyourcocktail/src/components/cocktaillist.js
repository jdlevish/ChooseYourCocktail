import React, { Component, useState } from 'react';
//Boostrap
import { Container, Card, Row, Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import $ from "jquery";

export default function CocktailList(props) {
    const [recipe, setRecipe] = useState("");
    console.log(props.drinks)
    async function getRecipe(id) {


        try {
            const res = await $.ajax({
                url: "/api/cocktailRecipe/" + id,
                method: "GET"


            })
            setRecipe(res)
        } catch (e) { console.log(e) }

    }




    return (
        <div>


            <ul>

                {
                    props.drinks.map((result) => (
                        <Card id={result.idDrink} style={{ width: '18rem' }} className="float-left col-md-6 m-3">
                            <Card.Img variant="top" className="mt-1" src={result.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{result.strDrink}</Card.Title>

                                <Button variant="secondary" >Click here for full recipe</Button>
                            </Card.Body>
                        </Card>


                    ))
                }

            </ul>

        </div >
    );
}

