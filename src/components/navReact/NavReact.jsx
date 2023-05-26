import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.png"
import "./navReact.css"

export default function NavReact() {
    return (
        <div>
            <Navbar expand="lg" className="color-fondo-negro" variant="dark">
                <Container className="d-flex align-content-between">
                    <Navbar.Brand href="/">
                        <Image src={logo} fluid alt="Logo" className="logo-navbar" />
                    </Navbar.Brand>
                    <div>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            className="ms-auto me-1"
                        />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="my-3">
                                <Nav.Link
                                    href="#andressa"
                                    className="mx-lg-3 mx-1 ms-auto my-1"
                                >
                                    <h4 className="mb-0">ANDRESSA</h4>
                                </Nav.Link>
                                <Nav.Link
                                    href="#nucifera"
                                    className="mx-lg-3 mx-1 ms-auto my-1"
                                >
                                    <h4 className="mb-0">NUCIFERA</h4>
                                </Nav.Link>
                                <Nav.Link
                                    href="#rr"
                                    className="mx-lg-3 mx-1 ms-auto my-1"
                                >
                                    <h4 className="mb-0">RR</h4>
                                </Nav.Link>
                                <Nav.Link
                                    href="#yarbik"
                                    className="mx-lg-3 mx-1 ms-auto my-1"
                                >
                                    <h4 className="mb-0">YARBIK</h4>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}
