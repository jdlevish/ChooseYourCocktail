import React, { useState, useContext } from 'react'
import { Context } from '../functions/contexStore.js'
import $ from "jquery";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Bookmark from './BookMark'
import FullBookmark from './FullBookmark'

const checkFavorite = (favorites, id) => {
    if (favorites.indexOf(parseInt(id)) != -1) {
        return true
    } else if (favorites === undefined) {
        return false
    }
    return false


}


export default function BookmarkDisplay(props) {
    const { isAuthenticated } = useAuth0();

    const [state, dispatch] = useContext(Context)
    console.log(state.Favorites)
    // const [favorites, setFavorites] = useState("")

    return isAuthenticated ? checkFavorite(state.Favorites, props.id) ? <FullBookmark key={props.key} id={props.id} isFave={true} /> : <Bookmark key={props.key} id={props.id} isFave={false} /> : <Bookmark key={props.key} id={props.id} isFave={false} />




}