
import { React, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Context } from '../functions/contexStore.js'
import $ from "jquery";
import { useAuth0 } from "@auth0/auth0-react";
import BookMark from './BookMark.js';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


export default function FullBookMark(props) {

    const { getAccessTokenSilently } = useAuth0();
    const [favorite, setFavorite] = useState(true);
    const [state, dispatch] = useContext(Context)
    function setNewFavorites(id){
        setFavorite(!favorite)
    };
    async function sendFavorite(id) {

        try {
            const token = await getAccessTokenSilently();

            await $.ajax({
                url: "/api/favorites/" + id,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            await dispatch({ type: 'DELETE_FAVORITE', payload:id })
        }
        
        catch (error) {
            console.log(error);
        }


    }
    return (
        
         favorite?   <FontAwesomeIcon icon={faBookmark} size="2x" color="#AC1010" onClick={() => { sendFavorite(props.id).then(setNewFavorites(props.id)) }} />:<BookMark></BookMark>
        
    )
};