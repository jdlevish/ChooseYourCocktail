import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// const CallFavorites = () => {
//     const [favorites, setFavorites] = useState("");
//     const serverUrl = process.env.REACT_APP_SERVER_URL;

//     const { getAccessTokenSilently } = useAuth0();

//     const callApi = async () => {
//         try {
//             const response = await fetch(`${serverUrl}`);

//             const responseData = await response.json();

//             setMessage(responseData.message);
//         } catch (error) {
//             setMessage(error.message);
//         }
//     };

//     const callSecureApi = async () => {
//         try {
//             const token = await getAccessTokenSilently();

//             const response = await fetch(
//                 `${serverUrl}/api/messages/protected-message`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             const responseData = await response.json();

//             setMessage(responseData.message);
//         } catch (error) {
//             setMessage(error.message);
//         }
//     };

return (
    
  );
};

export default ExternalApi;