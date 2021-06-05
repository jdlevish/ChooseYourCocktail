import React from "react";

import { NavDropdown } from 'react-bootstrap';

import { useAuth0 } from "@auth0/auth0-react";

const FavoritesButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <span className="buttonText"><NavDropdown.Item href="/favorites">Favorite Cocktails</NavDropdown.Item></span> : <div>
    </div>
};

export default FavoritesButton;