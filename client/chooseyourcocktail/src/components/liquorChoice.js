import React, { Component, useState, useEffect } from 'react';
//Boostrap
import { Container, Row, Button } from 'react-bootstrap';
import $ from "jquery";
import CocktailList from './cocktaillist';
import Pagination from './pagination';




// component to allow user to chose the base liquor of the cocktail the user is looking for 
export default function LiquorChoice(props) {
    const [drinks, setDrinks] = useState([]);
    const [liquorValue, setLiquorValue] = useState("");
    const [searchType, setSearchType] = useState("Liquor");
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState("");


    // start pagination code
    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [drinksPerPage] = useState(9);



    // Get current posts
    const indexOfLastDrink = currentPage * drinksPerPage;
    const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
    const currentdrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // end pagination code

    // this function makes an api call to the express server to search cocktaildb api by liquor type
    async function search(liquorValue, searchType) {
        console.log(liquorValue, searchType)
        if (searchType === 'Liquor') {
            try {
                setLoading(true);
                const res = await $.ajax({
                    url: "/api/cocktailAPI/" + liquorValue.toLowerCase(),
                    method: "GET"

                })
                // console.log(res)
                await setDrinks(res)
                setLoading(false);
                // console.log(drinks)
            } catch (e) { console.log(e) }


        }

        else if (searchType === 'Ingredient') {
            try {
                setLoading(true)
                const res = await $.ajax({
                    url: "/api/cocktailAPI/" + liquorValue.toLowerCase(),
                    method: "GET"

                })
                // console.log(res)
                await setDrinks(res)
                setLoading(false)
                // console.log(drinks)
            } catch (e) { console.log(e) }


        }


        else if (searchType === 'Cocktail') {
            try {
                setLoading(true);
                const res = await $.ajax({
                    url: "/api/cocktailAPI/Cocktail/" + liquorValue.toLowerCase(),
                    method: "GET"

                })
                // console.log("response : " + res)
                // let resArray = []
                // resArray.push(res);
                // console.log("response :" + res[0])



                await setDrinks(res)
                setLoading(false);
                // console.log(drinks)
            } catch (e) { console.log(e) }


        }



    }


    // this function checks the keys pressed when input field is in focus and calls searchLiquor function when enter is pressed
    function handleKeyPress(e, liquorValue, searchType) {
        console.log(e.key)
        // console.log(liquorValue)
        if (e.key === 'Enter') {
            e.preventDefault()
            console.log(liquorValue)
            liquorValue = liquorValue
            search(liquorValue, searchType)
        }
        else {
            return
        }
    }
    // this function calls searchLiquor function when search button is clicked
    function handleSubmit(e, liquorValue, searchType) {
        e.preventDefault()
        liquorValue = liquorValue
        search(liquorValue, searchType);

    }








    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result)
                    setDrinks(result.drinks);
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else


        return (
            <div>
                <Container >

                    <form className="pt-5" >
                        <input type="text" name="liquor" value={liquorValue} onKeyPress={(e) => handleKeyPress(e, liquorValue, searchType)} onChange={(e) => { setLiquorValue(e.target.value) }} />
                        <select className="Cocktails" value={searchType} onChange={(e) => { setSearchType(e.target.value) }}>
                            <option value="Liquor">Liquor</option>
                            <option value="Ingredient">Ingredient</option>
                            <option value="Cocktail">Cocktail</option>

                        </select>
                        <Button className="btn btn-danger" onClick={(e) => { handleSubmit(e, liquorValue, searchType) }}>Search</Button>
                    </form>



                </Container>
                <Container>
                    <Row>

                        <CocktailList drinks={currentdrinks} loading={loading} />
                        <Pagination paginate={paginate} drinksPerPage={drinksPerPage} totalDrinks={drinks.length} />

                    </Row>

                </Container>

            </div>
        )
};


