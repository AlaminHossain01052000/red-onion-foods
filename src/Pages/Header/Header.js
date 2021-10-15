import React, { useState } from 'react';
import "./Header.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../images/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const [navbg, setNavbg] = useState(false);

    const changeBg = () => {
        if (window.scrollY > 100) {
            setNavbg(true);
        }
        else {
            setNavbg(false);
        }
    }
    window.addEventListener("scroll", changeBg);
    const myMenu = document.getElementById("my-menu");
    if (myMenu) {
        if (navbg) {
            myMenu.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
        if (!navbg) {
            myMenu.style.backgroundColor = "white";
        }
    }
    const signOut = () => {
        logOut();
    }



    return (

        <div>
            <Navbar id="my-menu" collapseOnSelect expand="lg" variant="dark" className="fixed-top" >
                <Container className="d-flex align-items-center row-cols-2">
                    <Navbar.Brand href="#home"><img className="w-25" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto text-black align-items-center d-flex">
                            <Nav.Link as={Link} to="/cart" className="fs-5 fw-bold"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Nav.Link>

                            {
                                user.email ?
                                    <Nav.Link onClick={signOut} className="fs-5 fw-bold">Logout</Nav.Link>
                                    : <Nav.Link as={Link} to="/signup" className="fs-5 fw-bold">Login</Nav.Link>
                            }

                            <Nav.Link as={Link} to="/signup" className="text-dark fs-5 fw-bold">
                                <button className="btn-signup">Signup</button>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;