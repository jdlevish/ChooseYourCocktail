import { React, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from "jquery";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from '../functions/contexStore.js'
import FullBookMark from './FullBookmark.js';
import BookmarkDisplay from './displayBookmark.js';



import { faBookmark } from '@fortawesome/free-regular-svg-icons'
// import { fasBookmark } from '@fortawesome/free-solid-svg-icons '


export default function BookMark(props) {
  
    const { isAuthenticated } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();
    const [favorite, setFavorite] = useState(true);
    const [state, dispatch] = useContext(Context)
    console.log(props)
    function setNewFavorites(id){
        
       
        setFavorite(!favorite)
       
    };
    async function sendFavorite(id) {
        console.log(id)

        try {
            const token = await getAccessTokenSilently();

            await $.ajax({
                url: "/api/favorites/" + id,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        }
        catch (error) {
            console.log(error);
        }


    }
    return (
        
        isAuthenticated? favorite?    <FontAwesomeIcon icon={faBookmark} size='2x' color="#AC1010" onClick={() => { sendFavorite(props.id).then(setNewFavorites(props.id))}} />:<FullBookMark></FullBookMark>:<FontAwesomeIcon icon={faBookmark} size='2x' color="#AC1010"  />
      
    )
}
