import React, { Component, useState } from 'react';
//Boostrap
import { Container, Card, Modal, Row, Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import $ from "jquery";
import DrinkRecipe from "./DrinkRecipe"

export default function CocktailList(props) {
    const [recipe, setRecipe] = useState("");



    // modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);








    console.log(props.drinks)

    // recipe call
    async function getRecipe(id) {


        try {
            const res = await $.ajax({
                url: "/api/cocktailRecipe/" + id,
                method: "GET"


            })


            await setRecipe(res)



        } catch (e) { console.log(e) }

    }
    // modal code for recipe's



    if (props.drinks.length === 0) {
        return (

            < div >
                <h1>No Results</h1>
            </div >

        );
    }
    return (
        <div>





            {

                // this code maps over the drinks props and creates a card with a button for each cocktail
                props.drinks.map((result) => (
                    <Card id={result.idDrink} style={{ width: '18rem' }} className="float-left col-md-6 m-3">
                        <Card.Img variant="top" className="mt-1" src={result.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title className="card-Title">{result.strDrink}</Card.Title>
                            {/* modal */}
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{recipe.strDrink}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* <Card.Img variant="top" className="mt-1" src={recipe.strDrinkThumb} /> */}
                                    <DrinkRecipe recipe={recipe} />

                                    <Button variant="danger" onClick={handleClose}>
                                        Close</Button>
                                </Modal.Body>

                            </Modal>

                            <Button variant="secondary" onClick={() => getRecipe(result.idDrink).then(handleShow)} >Click here for full recipe</Button>
                        </Card.Body>
                    </Card>


                ))
            }



        </div >
    );
}

