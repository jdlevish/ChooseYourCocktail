import React, { Component, useState } from 'react';
//Boostrap
import { Container, Card, Modal, Button } from 'react-bootstrap';
import $ from "jquery";
import DrinkRecipe from "./DrinkRecipe"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far } from '@fortawesome/free-brands-svg-icons'

import { faBookmark } from '@fortawesome/free-regular-svg-icons'

export default function CocktailList(props) {
    const [recipe, setRecipe] = useState("");




    // modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);








    // console.log(props.drinks)

    // recipe call this function takes the id of the cocktail the user selected and sends it to the backend to search database for full recipe
    async function getRecipe(id) {


        try {
            const res = await $.ajax({
                url: "/api/cocktailAPI/recipe/" + id,
                method: "GET"


            })


            await setRecipe(res)



        } catch (e) { console.log(e) }

    }
    // modal code for recipe's
    if (props.loading === true) {
        return (
            <div>
                Loading.....
            </div>
        )
    }



    else if (props.drinks.length === 0 || props.drinks == null) {
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
                    <Card key={result.idDrink} id={result.idDrink} className="float-left col-md-3 m-3">
                        <Card.Header className="container-fluid"><FontAwesomeIcon icon={faBookmark} size='2x' color="#AC1010" /></Card.Header>


                        <Card.Img variant="top" className="mt-1" src={result.strDrinkThumb} />
                        <Card.Body>



                            <Card.Title className="card-Title Cocktails">{result.strDrink}</Card.Title>

                            {/* modal */}
                            <Modal key={recipe.idDrink} show={show} onHide={handleClose}>
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

