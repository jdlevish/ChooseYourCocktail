// import { useContext } from 'react'
// import { Context } from './contexStore.js'
// import $ from "jquery";
// import { useAuth0 } from "@auth0/auth0-react";

// const useFavorites = async () => {
//     const [state, dispatch] = useContext(Context)
//     const { user } = useAuth0();
//     const { sub } = user
//     const { getAccessTokenSilently } = useAuth0();


//     try {
//         const token = await getAccessTokenSilently();

//         const res = await $.ajax({
//             url: "/api/favorites/",
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             }
//         })

//         await console.log(res)
//         await dispatch({ type: 'SET_FAVORITES', payload: res })

//         console.log(res)



//     }
//     catch (error) {
//         console.log(error);
//     }


// }
// export default useFavorites;

