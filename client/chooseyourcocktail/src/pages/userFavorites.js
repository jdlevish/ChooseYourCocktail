


import { React, useState, useEffect, useContext } from 'react'
import { Container, Card, Modal, Button } from 'react-bootstrap';
import DrinkRecipe from "../components/DrinkRecipe"
import BookMark from "../components/BookMark"
import Loading from '../components/loading';
import { Context } from '../functions/contexStore.js'
import $ from "jquery";
import { useAuth0 } from "@auth0/auth0-react";






export default function UserFavorites() {
    const { user } = useAuth0();
    const { sub } = user
    const { getAccessTokenSilently } = useAuth0();
    const [favorite, setFavorite] = useState([]);
    const [recipe, setRecipe] = useState("");




    // modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // this function calls the api and returns the logged in users favorites from the mongodb database
    async function getFavorites() {

        try {
            const token = await getAccessTokenSilently();

            const res = await $.ajax({
                url: "/api/favorites/",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            await console.log(res)
            await setFavorite(res);

            console.log(res)


        }
        catch (error) {
            console.log(error);
        }


    }
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
    // this calls the api to get the favorites when the favorites page is loaded
    useEffect(() => { getFavorites() }, []);
    return (
        <div>


        </div>
    )
}
