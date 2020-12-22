import React, { Component, useState } from 'react';
//Boostrap
import { Container, Card, Modal, Row, Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import $ from "jquery";

export default function CocktailList(props) {
    const [recipe, setRecipe] = useState("");
    console.log(props.drinks)

    // modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);










    // recipe call
    async function getRecipe(id) {


        try {
            const res = await $.ajax({
                url: "/api/cocktailRecipe/" + id,
                method: "GET"


            })
            console.log(res)
            setRecipe(res)

        } catch (e) { console.log(e) }

    }
    // modal code for recipe's





    return (
        <div>


            <ul>

                {
                    props.drinks.map((result) => (
                        <Card id={result.idDrink} style={{ width: '18rem' }} className="float-left col-md-6 m-3">
                            <Card.Img variant="top" className="mt-1" src={result.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{result.strDrink}</Card.Title>
                                {/* modal */}
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{recipe.strDrink}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>{recipe.strInstructions}</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="danger" onClick={handleClose}>
                                            Close
                </Button>

                                    </Modal.Footer>
                                </Modal>

                                <Button variant="secondary" onClick={() => getRecipe(result.idDrink).then(handleShow)} >Click here for full recipe</Button>
                            </Card.Body>
                        </Card>


                    ))
                }

            </ul>

        </div >
    );
}

