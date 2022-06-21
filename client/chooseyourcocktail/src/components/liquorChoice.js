import React, {  useState, useEffect, useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Button } from 'react-bootstrap';
import $ from "jquery";
import CocktailList from './cocktaillist';
import Pagination from './pagination';
import { Context } from '../functions/contexStore.js'





// component to allow user to chose the base liquor of the cocktail the user is looking for 
export default function LiquorChoice(props) {
    // contex Reducer
    const [state, dispatch] = useContext(Context);
    const [drinks, setDrinks] = useState([]);
    const [liquorValue, setLiquorValue] = useState("");
    const [searchType, setSearchType] = useState("Liquor");
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState("");


    // start pagination code
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [drinksPerPage] = useState(9);

    const APIKEY = process.env.REACT_APP_DRINK_DB


// start pagination code
    const totalDrinks = drinks.length;
    const indexOfLastDrink = currentPage * drinksPerPage;
    const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
    const currentdrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);
    const pageNumbers = [];
       for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
           pageNumbers.push(i);
       }
    const visibleRange = [];

    for(let i = currentPage-1; i<=currentPage+1; i++){
        if(i>0 && i<=pageNumbers.length){
        visibleRange.push(i);
    }
}

    // Change page
    const paginate = pageNumber => setCurrentPage( pageNumber);

    // end pagination code

    // this function makes an api call to the express server to search cocktaildb api by liquor type
    async function search(liquorValue, searchType) {
        if (searchType === 'Liquor') {
            try {
                setLoading(true);
                const res = await $.ajax({
                    url: "/api/cocktailAPI/" + liquorValue.toLowerCase(),
                    method: "GET"

                })

                await setDrinks(res)
                setLoading(false);
            } catch (e) { console.log(e) }


        }

        else if (searchType === 'Ingredient') {
            try {
                setLoading(true)
                const res = await $.ajax({
                    url: "/api/cocktailAPI/" + liquorValue.toLowerCase(),
                    method: "GET"

                })
                
                await setDrinks(res)
                setLoading(false)
                
            } catch (e) { console.log(e) }


        }


        else if (searchType === 'Cocktail') {
            try {
                setLoading(true);
                const res = await $.ajax({
                    url: "/api/cocktailAPI/Cocktail/" + liquorValue.toLowerCase(),
                    method: "GET"
                })
                await setDrinks(res)
                setLoading(false);
            } catch (e) { console.log(e) }


        }



    }


    // this function checks the keys pressed when input field is in focus and calls searchLiquor function when enter is pressed
    function handleKeyPress(e, liquorValue, searchType) {
        console.log(e.key)
        if (e.key === 'Enter') {
            e.preventDefault()
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

        fetch("https://www.thecocktaildb.com/api/json/v2/"+APIKEY+"/filter.php?a=Alcoholic")
            .then(res =>
                res.json())
            .then(
                (result) => {

                    setIsLoaded(true);
                    dispatch({ type: 'SET_DRINKS', payload: result.drinks })
                    setDrinks(result.drinks);
                },
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
                <Container className='pt-2' >
                
                    <form className="pt-5 choice" >
                        <input type="text" name="liquor" className="mr-1" value={liquorValue} onKeyPress={(e) => handleKeyPress(e, liquorValue, searchType)} onChange={(e) => { setLiquorValue(e.target.value) }} />
                        <select className="Cocktails"  className="mr-1" value={searchType} onChange={(e) => { setSearchType(e.target.value) }}>
                            <option value="Liquor">Liquor</option>
                            <option value="Ingredient">Ingredient</option>
                            <option value="Cocktail">Cocktail</option>

                        </select>
                        <Button className="btn btn-danger" onClick={(e) => { handleSubmit(e, liquorValue, searchType) }}>Search</Button>
                    </form>
                    

     



                </Container>
                <Container>
                   

                        <CocktailList  drinks={currentdrinks} loading={loading} />
                        
                        <Row>
                            
                        <Pagination currentPage={currentPage} paginate={paginate} drinksPerPage={drinksPerPage} totalDrinks={drinks.length} visibleRange={visibleRange} pageNumbers={pageNumbers}/>
                     
                        </Row>
                    

                </Container>

            </div>
        )
};


