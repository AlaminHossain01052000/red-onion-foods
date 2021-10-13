import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Breakfast.css";
import breakfast1 from "../../../../images/Breakfast/breakfast1.png";
import breakfast2 from "../../../../images/Breakfast/breakfast2.png";
import breakfast3 from "../../../../images/Breakfast/breakfast3.png";
import breakfast4 from "../../../../images/Breakfast/breakfast4.png";
import breakfast5 from "../../../../images/Breakfast/breakfast5.png";
import breakfast6 from "../../../../images/Breakfast/breakfast6.png";
const Breakfast = () => {
    return (
        <Container>
            <Row xs={1} sm={1} md={2} lg={3}>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={breakfast1} />
                        <Card.Body className="text-center">
                            <Card.Title>Bagel and cream cheese</Card.Title>
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
                        <Card.Img variant="top" src={breakfast2} />
                        <Card.Body className="text-center">
                            <Card.Title>Breakfast sandwich</Card.Title>
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
                        <Card.Img variant="top" src={breakfast3} />
                        <Card.Body className="text-center">
                            <Card.Title>Baked Chicken</Card.Title>
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
                        <Card.Img variant="top" src={breakfast4} />
                        <Card.Body className="text-center">
                            <Card.Title>Egg Benedict</Card.Title>
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
                        <Card.Img variant="top" src={breakfast5} />
                        <Card.Body className="text-center">
                            <Card.Title>Toast Croissant Fried Egg</Card.Title>
                            <Card.Text>
                                How we dream about our future
                            </Card.Text>
                            <Card.Text>
                                $19.99
                            </Card.Text>
                            <Button className="btn-details" variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={breakfast6} />
                        <Card.Body className="text-center">
                            <Card.Title>Full Breakfast Fried Egg Toast Brunch</Card.Title>
                            <Card.Text>
                                How we dream about our future
                            </Card.Text>
                            <Card.Text>
                                $3.99
                            </Card.Text>
                            <Button className="btn-details" variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default Breakfast;