import React from 'react'
import Nav from '../components/Nav'
import { Container, Card, Modal, Button, Image, Row } from 'react-bootstrap';
import ingredients from '../images/ingredients.jpg'
import liquor from '../images/liquor.jpg'
import tools from '../images/tools.jpg'
import fun from '../images/fun.jpg'

export default function theBasics() {
    return (
        <div>
            <Nav />
            <Container>
                <Row>

                    <Image className='pt-3 col-md-6  col-12 basicsImage' src={liquor} /> <Image className='pt-3 col-md-6  col-12 basicsImage' src={ingredients} />
                </Row>
                <Row>
                    <h1 className='pt-2 col-md-6  col-12 basicsText'>The Liquor</h1><h1 className="pt-2 catBasics col-md-6  col-12 basicsText">The Ingredients</h1>
                </Row>
                <Row>
                    <Image className='pt-2 col-md-6  basicsImage' src={tools} /><Image className='pt-2 col-md-6  basicsImage' src={fun} />
                </Row>
                <Row>
                    <h1 className='pt-2 col-md-6  basicsText'>The Tools</h1><h1 className='pt-2 col-md-6 basicsText'>The Fun</h1>
                </Row>
            </Container>

        </div>
    )
}
