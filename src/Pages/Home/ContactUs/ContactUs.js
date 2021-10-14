import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerIcon from "../../../images/logo.png";
import "./ContactUs.css";
const ContactUs = () => {
    return (
        <>
            <div id="contact-us">
                <Container>
                    <Row>
                        <Col lg={8} md={6} sm={12} >
                            <img src={footerIcon} alt="" className="w-25" />
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6}>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <button class="nav-link buttonA" aria-current="page">About online food</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link buttonA">Read Our Blog</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link buttonA">Signup to Deliver</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link buttonA">Add your restaurant</button>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={2} sm={6} xs={6}>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <button class="nav-link buttonA" aria-current="page">Get Help</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link buttonA">Read FAQs</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link buttonA">View All Cities</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link buttonA">Restaurents Near Me</button>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <div id="footer" className="d-flex justify-content-between my-3 align-items-center">
                        <div>
                            <p className="text-success">Copyright &#169; 2020 Online Food</p>
                        </div>
                        <div className="text-left">
                            <ul class="nav">
                                <li class="nav-item">
                                    <button class="nav-link buttonA ms-5" aria-current="page" href="#">Active</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link buttonA ms-5" href="#">Link</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link buttonA ms-5" href="#">Link</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    );
};

export default ContactUs;