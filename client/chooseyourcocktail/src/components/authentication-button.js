import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import SignupButton from "./signup-button";

import { useAuth0, getAccessTokenSilently } from "@auth0/auth0-react";


const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <span className="buttonText"><LogoutButton /></span> : <div><span className="buttonText">
        <LoginButton />

    </span>
        <span className="buttonText">
            <SignupButton />
        </span>
    </div>
};

export default AuthenticationButton;