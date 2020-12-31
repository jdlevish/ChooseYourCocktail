import React, { Component } from "react";

//components
import Nav from "../components/Nav";
import LiquorChoice from "../components/liquorChoice";



class choose extends React.Component {
    render() {
        return (
            <div>

                <Nav />
                <LiquorChoice />
            </div>
        );
    }
}
export default choose;