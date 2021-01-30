import React from 'react'
import Nav from '../components/Nav'
import { Container } from 'react-bootstrap';
import ingredients from '../images/ingredients.jpg'
import liquor from '../images/liquor.jpg'
import tools from '../images/tools.jpg'
import fun from '../images/fun.jpg'

export default function theBasics() {
    return (
        <div>

            <Container>
                <div className="card float-left col-md-6  col-12"   >
                    <a href="/Basics/liquor">
                        <img className="pt-3  basicsImage" src={liquor} alt="Card image cap" />
                        <div className="card-body">
                            <h1 className='pt-2  basicsText'>The Liquor</h1>
                        </div>
                    </a>
                </div>
                <div className="card float-right col-md-6  col-12" >
                    <a href="/Basics/ingredients">
                        <img className="pt-3  basicsImage" src={ingredients} alt="Card image cap" />
                        <div className="card-body">
                            <h1 className='pt-2  basicsText'>The Ingredients</h1>
                        </div>
                    </a>
                </div>
                <div className="card float-left col-md-6  col-12" >
                    <a href="/Basics/tools">
                        <img className="pt-3  basicsImage" src={tools} alt="Card image cap" />
                        <div className="card-body">
                            <h1 className='pt-2  basicsText'>The Tools</h1>
                        </div>
                    </a>
                </div>
                <div className="card float-right col-md-6  col-12" >
                    <a href="/Basics/fun">
                        <img className="pt-3  basicsImage" src={fun} alt="Card image cap" />
                        <div className="card-body">
                            <h1 className='pt-2  basicsText'>The Fun</h1>
                        </div>
                    </a>
                </div>


            </Container>
        </div>


    )
}
