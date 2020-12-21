import React, { Component } from "react";

import $ from "jquery";

class CocktailContainer extends Component {
    state = {

        userId: "",
        properties: []
    };


    async componentDidMount() {


        await 
    }

    getProperties = (userId) => {

        $.ajax({
            method: "POST",
            url: "/api/",
            data: { user_Id: userId }

        })
            .then((res) => this.setState({ properties: res }))
            .catch(err => console.log(err));
    };
    checkState = () => {
        console.log(this.state)
    }



    render() {
        return (
            <div>
                <CocktailList cocktails={this.state} />

            </div>
        );
    }
}

export default CocktailContainer;
