import React, { Component } from 'react'
import Header from '../Components/header'
import './home.scss';
import { Container, Carousel } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="carousel-container">
                    <Carousel fade='true' interval="2000" className="carousel">
                    <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/lfcu.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/fans.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/member_header.jpeg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/ywnwa.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/anfield.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Container>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Container>
            </div>
        )
    }
}

export default Home
