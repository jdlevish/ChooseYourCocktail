import React, {  useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import { Context } from '../functions/contexStore.js'
import { useAuth0 } from "@auth0/auth0-react";

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
    const styles = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const [state, dispatch] = useContext(Context)
    
    // const [favorites, setFavorites] = useState("")

    return isAuthenticated ? checkFavorite(state.Favorites, props.id) ? <animated.div style={styles}><FullBookmark key={props.key} id={props.id} isFave={true} /></animated.div> : <animated.div style={styles}><Bookmark key={props.key} id={props.id} isFave={false} /></animated.div> :<animated.div style={styles}> <Bookmark key={props.key} id={props.id} isFave={false} /></animated.div>




}