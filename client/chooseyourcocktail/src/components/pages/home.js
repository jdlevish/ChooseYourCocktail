import React, { Component } from "react";

//components
import Nav from "../Nav";
import LiquorChoice from "../liquorChoice";



class Home extends React.Component {
    render() {
        return (
            <div>

                <Nav />
                <LiquorChoice />
            </div>
        );
    }
}
export default Home;
