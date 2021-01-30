import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Image, Col } from 'react-bootstrap'

const ProfileButton = () => {


    const { name, picture, email } = user;
    const { user, isAuthenticated } = useAuth0();


    <Image src={picture} className='roundedCircle' />


};

export default ProfileButton;