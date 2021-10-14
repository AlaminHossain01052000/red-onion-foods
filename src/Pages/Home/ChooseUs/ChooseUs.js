import React from 'react';
import { Card, Container, Button, Col, Row } from 'react-bootstrap';
import choose1 from "../../../images/Image/adult-blur-blurred-background-687824.png";
import choose2 from "../../../images/Image/chef-cook-food-33614.png";
import choose3 from "../../../images/Image/architecture-building-city-2047397.png";
import icon1 from "../../../images/ICON/Group 204.png";
import icon2 from "../../../images/ICON/Group 1133.png";
import icon3 from "../../../images/ICON/Group 245.png";
import "./ChooseUs.css";

const ChooseUs = () => {
    return (
        <Container id="choose-us">
            <div className="my-5">
                <h1>Why you choose us</h1>
                <p style={{ width: "50%" }} className="fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sequi praesentium quibusdam ipsum adipisci aperiam, eligendi nesciunt .
                </p>
            </div>
            <Row xs={1} sm={1} md={2} lg={3}>
                <Col>
                    <Card style={{ width: '18rem' }}>

                        <Card.Img variant="top" src={choose1} />
                        <Card.Body className="d-flex flex-row">
                            <div>
                                <img src={icon1} alt="" />
                            </div>
                            <div className="ms-3">
                                <Card.Title>

                                    <h3>Fast Delivery</h3>
                                </Card.Title>
                                <Card.Text>
                                    When you confirm us our team of 38  members including 8 chefs eork hand to hand together to ensure that you can take the food fast
                                </Card.Text>
                                <Button variant="primary" className="btn-see-more">See More</Button>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>

                        <Card.Img variant="top" src={choose2} />
                        <Card.Body className="d-flex flex-row justify-content-between">
                            <div>
                                <img src={icon2} alt="" />
                            </div>
                            <div className="ms-3">
                                <Card.Title>

                                    A Good Auto Responder
                                </Card.Title>
                                <Card.Text className="text-left">
                                    Every feddback and review of you is very much precious to us .We coordially welcome yours all shorts of commnets.We try To improve a bit more every day .Our Chefs are also so much professional .Two of our chefs are winner of masterchefs autralia 2015 and 2014
                                </Card.Text>
                                <Button variant="primary" className="btn-see-more">See More</Button>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>

                        <Card.Img variant="top" src={choose3} />
                        <Card.Body className="d-flex flex-row">
                            <div>
                                <img src={icon3} alt="" />
                            </div>
                            <div className="ms-3">
                                <Card.Title>

                                    <h3>Home Delivery</h3>
                                </Card.Title>
                                <Card.Text>
                                    Due to the covid-19 panademic we start home delivery service .Our delivery heroes work hard to ensure your food recieved by you.
                                </Card.Text>
                                <Button variant="primary" className="btn-see-more">See More</Button>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>

        </Container >

    );
};

export default ChooseUs;