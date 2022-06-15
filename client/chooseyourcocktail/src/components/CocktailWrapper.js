import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../functions/contexStore.js'
import { useAuth0 } from "@auth0/auth0-react";
import $ from "jquery";


export default function CocktailWrapper() {
    const [state, dispatch] = useContext(Context);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState("");
    const { user, isAuthenticated } = useAuth0();
   
    const { getAccessTokenSilently } = useAuth0();


    useEffect(() => {
        const APIKEY = process.env.REACT_APP_DRINK_DB
        console.log(APIKEY)

        fetch("https://www.thecocktaildb.com/api/json/v2/"+APIKEY+"/filter.php?a=Alcoholic")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    
                    dispatch({ type: 'SET_DRINKS', payload: result.drinks })

                },
               
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

                        await dispatch({ type: 'SET_FAVORITES', payload: res[0].favorite_id })





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
