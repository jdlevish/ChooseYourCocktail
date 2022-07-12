import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import SignupButton from "./signup-button";

import { useAuth0, getAccessTokenSilently } from "@auth0/auth0-react";


const AuthenticationButton = (props) => {
    const isAuthenticated= props.isAuthenticated;
console.log(isAuthenticated);
    return isAuthenticated ? <span className="buttonText"><LogoutButton /></span> : <div><span className="buttonText">
        <LoginButton />

    </span>
        <span className="buttonText">
            <SignupButton />
        </span>
    </div>
};

export default AuthenticationButton;