import React from "react";
import Loading from "../components/loading";
import LiquorChoice from "../components/liquorChoice";
import { useAuth0 , withAuthenticationRequired} from "@auth0/auth0-react";





const ChooseAuth = () => {
  
    
        return (
            <div >


                <LiquorChoice />

            </div>
        );
    }
    export default withAuthenticationRequired(ChooseAuth, {
        onRedirecting: () => <Loading />,
    });