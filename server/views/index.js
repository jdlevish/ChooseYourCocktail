import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(

  <BrowserRouter>
    <Auth0ProviderWithHistory domain={process.env.REACT_APP_AUTH0_DOMAIN}
    client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
    audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    useRefreshTokens={true}
    cacheLocation="localstorage"
    
    >
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
