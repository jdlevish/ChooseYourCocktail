import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../functions/contexStore.js'

export default function CocktailWraper() {
    const [state, dispatch] = useContext(Context);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState("");
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
            )
    }, [])
    return (
        <div>

        </div>
    )
}
