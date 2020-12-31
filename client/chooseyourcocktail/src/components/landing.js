import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import $ from "jquery";
import cocktail from '../images/cychome.png'

export default function Landing(props) {
    console.log(props)
    return (
        <div>
            <Container>
                <h1 className="landingHeading"> What will you be drinking tonight ? </h1>
                <Image className="pt-3 pr-3 landingImage float-left" src={cocktail} /><p className="p-3 landingText">Welcome to Choose Your Cocktail. This site was built with the goal of providing you the inspiration to try something new. A new cocktail, liquor, ingredient or a new spin on your go to cocktail. There are a few ways to get started, you can jump right in and choose your cocktail by clicking on  "get started" and selecting "choose your cocktail". You can also choose to learn more about cocktails and liquor in general before making your selection, if you click "get started" and choose "learn the basics" you will find all the information needed to make a well informed cocktail decision. Last but certainly not least, if you choose the "what's new" option under "get started" you will be presented with newly added or featured cocktails, ingredients, or products. How ever you decide to Choose Your Cocktail,  choose wisely and  drink responsibly.   </p>
            </Container>

        </div>
    )
}