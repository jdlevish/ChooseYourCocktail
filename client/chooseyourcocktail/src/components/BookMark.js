import { React, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from "jquery";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from '../functions/contexStore.js'



import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
// import { fasBookmark } from '@fortawesome/free-solid-svg-icons '


export default function BookMark(props) {
    const { isAuthenticated } = useAuth0();
    const [state, dispatch] = useContext(Context);
    const { getAccessTokenSilently } = useAuth0();
    // const [favorite, setFavorite] = useState(state.Favorites[0].favorite_id);
    console.log(props)
    // console.log(favorite)
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
        <div>

            <BookmarkBorderIcon className="float-left" style={{ color: "#AC1010", fontSize: 50 }} onClick={() => { sendFavorite(props.id) }} />
        </div>
    )



}
