import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css';
import { useLocation} from "react-router-dom";
import Logo from "../images/logo.svg";


const Header = () => {

    const location = useLocation();

    return (
            <Navbar collapseOnSelect expand="xl" sticky="top" variant="light" className="bg-white p-0 mt-2 mb-2">
                <Container className="header-section">
                    <Navbar.Brand href="/"><img src={Logo} /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-5">
                        </Nav>
                        <Nav className="m-0 p-0">
                            {/* <Nav.Link className={location.pathname === "javascript:void(0)" ? "activeMenuLink" : "menuLink"} href="javascript:void(0)">Market</Nav.Link>
                            <Nav.Link className={location.pathname === "javascript:void(0)" ? "activeMenuLink" : "menuLink"} href="javascript:void(0)">Products</Nav.Link>
                            <Nav.Link className={location.pathname === "javascript:void(0)" ? "activeMenuLink" : "menuLink"} href="javascript:void(0)">News and Analysis</Nav.Link> */}
                        </Nav>
                        <Nav className="ms-auto">
                        </Nav>
                        <Nav className="m-0 p-0">
                            <Nav.Link href="javascript:void(0)"> <button className="outline-primary-btn m-0">Trading Hub</button></Nav.Link>
                            <Nav.Link href="javascript:void(0)"> <button className="outline-primary-btn m-0">Sign in</button></Nav.Link>
                            <Nav.Link href="javascript:void(0)"> <button className="primary-btn m-0">Create free account</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Header;