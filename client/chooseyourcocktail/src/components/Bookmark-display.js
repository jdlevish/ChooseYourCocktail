import React, { useState, useContext } from 'react'
import { Context } from '../functions/contexStore.js'
import $ from "jquery";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Bookmark from './BookMark'
import FullBookmark from './FullBookmark'

const checkFavorite = (favorites, id) => {
    if (favorites.indexOf(parseInt(id)) != -1) {
        return true
    }
    return false


}

export default function BookmarkDisplay(props) {
    const [state, dispatch] = useContext(Context)
    const [favorites, setFavorites] = useState(state.Favorites[0].favorite_id)
    return checkFavorite(favorites, props.id) ? <FullBookmark key={props.key} id={props.id} /> : <Bookmark key={props.key} id={props.id} />



}
