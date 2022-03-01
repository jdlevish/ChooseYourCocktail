import React from 'react'
import { useAuth0} from "@auth0/auth0-react";
const UserGuide = () => {
   
        const { isAuthenticated } = useAuth0();
    
        return isAuthenticated ? <h6 className="favoriteHeader"> to remove a cocktail from your favorites, click on the bookmark again and it will be removed</h6> : <div></div>
            
   
};
export default UserGuide;
