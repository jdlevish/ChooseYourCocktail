import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import cocktail from '../images/cychome.png'

export default function Landing(props) {
    console.log(props)
    return (
        <div>
            <Container>
                <h1 className="landingHeading"> What will you be drinking tonight ? </h1>
                <Image className="pt-3 mr-5 landingImage float-left" src={cocktail} /><p className="p-3 mt-5  landingText">Welcome to chooseyourcocktail.com, a great place to decide what you are going to be drinking this evening or possibly this afternoon.
                to get started go ahead and click on the choose your cocktail button on the top left and search through a huge database of cocktails. once you have found a few cocktails that you like go ahead and sign up so that you can save your favorites 
                for future use. Drink responsibly and Enjoy, Cheers! </p>
            </Container>

        </div>
    )
}