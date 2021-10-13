import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import dinner1 from "../../../../images/Dinner/dinner1.png";
import dinner2 from "../../../../images/Dinner/dinner2.png";
import dinner3 from "../../../../images/Dinner/dinner3.png";
import dinner4 from "../../../../images/Dinner/dinner4.png";
import dinner5 from "../../../../images/Dinner/dinner5.png";
import dinner6 from "../../../../images/Dinner/dinner6.png";

const Dinner = () => {
    return (
        <Container>
            <Row xs={1} sm={1} md={2} lg={3}>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dinner1} />
                        <Card.Body className="text-center">
                            <Card.Title>Salmon with Grapefruit and Lentil Salad</Card.Title>
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
                        <Card.Img variant="top" src={dinner2} />
                        <Card.Body className="text-center">
                            <Card.Title>Lemony Salmon Piccata</Card.Title>
                            <Card.Text>
                                How we dream about our future
                            </Card.Text>
                            <Card.Text>
                                $10.99
                            </Card.Text>
                            <Button className="btn-details" variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dinner3} />
                        <Card.Body className="text-center">
                            <Card.Title>Baked Chicken</Card.Title>
                            <Card.Text>
                                Pork Tendorlin with Quinoa Pilaf
                            </Card.Text>
                            <Card.Text>
                                $12.99
                            </Card.Text>
                            <Button className="btn-details" variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dinner4} />
                        <Card.Body className="text-center">
                            <Card.Title>French Fries with Cheese</Card.Title>
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
                        <Card.Img variant="top" src={dinner5} />
                        <Card.Body className="text-center">
                            <Card.Title>Garlic Butter Baked Salmon</Card.Title>
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
                        <Card.Img variant="top" src={dinner6} />
                        <Card.Body className="text-center">
                            <Card.Title>Baked Chicken</Card.Title>
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

            </Row>
        </Container>
    );
};

export default Dinner;