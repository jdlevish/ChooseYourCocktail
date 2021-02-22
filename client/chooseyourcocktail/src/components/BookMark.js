import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from "jquery";
import { useAuth0 } from "@auth0/auth0-react";



import { faBookmark } from '@fortawesome/free-regular-svg-icons'
// import { fasBookmark } from '@fortawesome/free-solid-svg-icons '


export default function BookMark(props) {

    const { getAccessTokenSilently } = useAuth0();
    const [favorite, setFavorite] = useState("");
    console.log(props)
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
            <FontAwesomeIcon icon={faBookmark} size='2x' color="#AC1010" onClick={() => { sendFavorite(props.id) }} />
        </div>
    )
}
