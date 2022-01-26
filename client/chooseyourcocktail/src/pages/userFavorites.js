


import { React, useState, useEffect, useContext } from 'react'
import { Container, Card, Modal, Button } from 'react-bootstrap';
import DrinkRecipe from "../components/DrinkRecipe"
import BookmarkDisplay from "../components/displayBookmark"

import "bootstrap/dist/css/bootstrap.min.css";
import Loading from '../components/loading';
import { Context } from '../functions/contexStore.js'
import $ from "jquery";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";








const UserFavorites = () => {

    const [state, dispatch] = useContext(Context)
    const { user } = useAuth0();
    const { sub } = user
    const { getAccessTokenSilently } = useAuth0();
    const [favorite, setFavorite] = useState([]);
    const [recipe, setRecipe] = useState("");
    const userImage = user.picture




    // modal
    const favoriteArray = [];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // declares drinksArray from the Global store
    const drinksArray = state.Drinks;


console.log(state)


    // gets full recipe
    async function getRecipe(id) {


        try {
            const res = await $.ajax({
                url: "/api/cocktailAPI/recipe/" + id,
                method: "GET"


            })


            await setRecipe(res)



        } catch (e) { console.log(e) }

    }
    // function to filter favorites from drinksArray

    function filterFavorites(drinksArray, drinks) {

        for (let i = 0; i < drinks.length; i++) {
            for (let j = 0; j < drinksArray.length; j++) {
                // console.log("drinksArray: " + drinksArray[j].idDrink);
                // console.log("comparison : " + (drinksArray[j].idDrink === drinks[i].toString()))
                // console.log("user favorite: " + drinks[i].toString());
                // console.log(drinksArray[i].idDrink === drinks[i].favorite_id.toString())
                if (drinksArray[j].idDrink === drinks[i].toString()) {
                    favoriteArray.push(drinksArray[j])
                    // console.log("favoritesArray: " + favoriteArray[0]);
                }
            }
        }
    }
    // this calls the api to get the favorites when the favorites page is loaded
    // useEffect(() => { getFavorites() }, []);
    filterFavorites(drinksArray, state.Favorites);

    return (
        <div>

            <Container>
                <h1 className=" favoriteHeader pb-3 pt-3"><u> {user.nickname}'s  favorite cocktails</u></h1>
                <img className=" rounded-circle  mx-auto d-block pb-2" src={userImage} />
                <h6 className="favoriteHeader"> to remove a cocktail from your favorites, click on the bookmark again and it will be removed</h6>
                {
                    // this code maps over the drinks props and creates a card with a button for each cocktail
                    favoriteArray.map((result) => (
                        <Card key={result.idDrink} id={result.idDrink} className="shadow float-left col-md-3 m-3">
                            <Card.Header className="container-fluid"><BookmarkDisplay key={result.idDrink} id={result.idDrink} /></Card.Header>


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


                                <Button className="shadow-sm" variant="secondary" onClick={() => getRecipe(result.idDrink).then(handleShow)} >Click here for full recipe</Button>

                            </Card.Body>
                        </Card>


                    ))
                }
            </Container>
        </div>

    )
}
export default withAuthenticationRequired(UserFavorites, {
    onRedirecting: () => <Loading />,
});
