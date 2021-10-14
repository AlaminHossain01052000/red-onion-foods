
import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import lunch1 from "../../../../images/lunch/lunch1.png";
import lunch2 from "../../../../images/lunch/lunch2.png";
import lunch3 from "../../../../images/lunch/lunch3.png";
import lunch4 from "../../../../images/lunch/lunch4.png";
import lunch5 from "../../../../images/lunch/lunch5.png";
import lunch6 from "../../../../images/lunch/lunch6.png";

const Lunch = () => {
    return (
        <section id="lunch">
            <Container>
                <Row xs={1} sm={1} md={2} lg={3}>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={lunch1} />
                            <Card.Body className="text-center">
                                <Card.Title>Healthy Meal Plan</Card.Title>
                                <Card.Text>
                                    How we dream about our future
                                </Card.Text>
                                <Card.Text>
                                    $23.99
                                </Card.Text>
                                <Button className="btn-details" variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={lunch2} />
                            <Card.Body className="text-center">
                                <Card.Title>Fried Chicken Bento</Card.Title>
                                <Card.Text>
                                    How we dream about our future
                                </Card.Text>
                                <Card.Text>
                                    $9.99
                                </Card.Text>
                                <Button className="btn-details" variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={lunch3} />
                            <Card.Body className="text-center">
                                <Card.Title>Tarragon-Baked-Salmon</Card.Title>
                                <Card.Text>
                                    How we dream about our future
                                </Card.Text>
                                <Card.Text>
                                    $6.99
                                </Card.Text>
                                <Button className="btn-details" variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={lunch4} />
                            <Card.Body className="text-center">
                                <Card.Title>Indian Lunch</Card.Title>
                                <Card.Text>
                                    How we dream about our future
                                </Card.Text>
                                <Card.Text>
                                    $8.99
                                </Card.Text>
                                <Button className="btn-details" variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={lunch5} />
                            <Card.Body className="text-center">
                                <Card.Title>Beef Steak</Card.Title>
                                <Card.Text>
                                    How we dream about our future
                                </Card.Text>
                                <Card.Text>
                                    $15.99
                                </Card.Text>
                                <Button className="btn-details" variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={lunch6} />
                            <Card.Body className="text-center">
                                <Card.Title>Honey Soy Gluzed Salmon with Peepers</Card.Title>
                                <Card.Text>
                                    How we dream about our future
                                </Card.Text>
                                <Card.Text>
                                    $8.99
                                </Card.Text>
                                <Button className="btn-details" variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Lunch;