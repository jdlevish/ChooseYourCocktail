import React, { Component } from "react";

//components
import Nav from "../components/Nav";
import LiquorChoice from "../components/liquorChoice";
import Landing from "../components/landing"



class Home extends React.Component {
    render() {
        return (
            <div>

                <Nav />
                <Landing />
                {/* <LiquorChoice /> */}
            </div>
        );
    }
}
export default Home;
