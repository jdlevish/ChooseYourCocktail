import React, { Component, useState } from 'react';
//Boostrap
import { Container, Navbar, Nav, Image, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import $ from "jquery";

export default function CocktailList(props) {
    // const [recipe, setRecipe] = useState("");
    console.log(props.drinks)

    // function getRecipe(id) {

    //     $.ajax({
    //         url: "/api/cocktailRecipe/" + id,
    //         method: "GET"


    //     }).then((res) => {
    //         console.log(res);

    //         setRecipe(res);
    //         // console.log(res)
    //     });

    // }
    return (
        <div>
            <Container>
                <ul>
                    {
                        props.drinks.map((result) => (
                            <div>
                                <h3>{result.strDrink}</h3>
                                <img src={result.strDrinkThumb} className="thumb" />
                            </div>

                        ))
                    }
                </ul>


            </Container>

        </div >
    );
}

