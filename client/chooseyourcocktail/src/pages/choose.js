import React from "react";
import LiquorChoice from "../components/liquorChoice";
import { useAuth0 } from "@auth0/auth0-react";





export default function Choose() {
  
    const { getAccessTokenSilently } = useAuth0();
        return (
            <div >


                <LiquorChoice />

            </div>
        );
    }

