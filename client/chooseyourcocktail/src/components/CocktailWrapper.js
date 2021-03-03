import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../functions/contexStore.js'
import { useAuth0 } from "@auth0/auth0-react";
// import useFavorites from '../functions/GetFavorites.js';
import $ from "jquery";




export default function CocktailWrapper() {
    const [state, dispatch] = useContext(Context);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState("");
    const { user, isAuthenticated } = useAuth0();
    // const { sub } = user
    const { getAccessTokenSilently } = useAuth0();
    const CocktailKey = process.env.COCKTAIL_KEY;
    console.log(process.env)
    useEffect(() => {

        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result)
                    dispatch({ type: 'SET_DRINKS', payload: result.drinks })

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            ).then(
                isAuthenticated ? async () => {



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

                        await dispatch({ type: 'SET_FAVORITES', payload: res })





                    }
                    catch (error) {
                        console.log(error);
                    }



                } : {}
            )




    }, [])

    return (
        <div>

        </div>
    )
}
