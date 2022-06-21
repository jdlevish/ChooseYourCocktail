import React from 'react'
import {Auth0Client, webAuth} from '@auth0/auth0-spa-js'

export default function cov() {
    const auth0client = new Auth0Client.webAuth({
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    });
    auth0client.crossOriginVerification();
  return (
<div></div>
  )
}

