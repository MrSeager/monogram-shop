"use client";
//Bootstrap
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
//Icons
import { MdMenu } from "react-icons/md";
import { BiLogoCodepen } from "react-icons/bi";

export default function MGNav() {
    return (
        <Navbar fixed='top' expand='lg' className='px-0 cs-tc-main user-select-none'>
            <Container className='cs-bg-navbar py-2 px-3 shadow'>
                <Navbar.Brand 
                    href="#home" 
                    className="text-uppercase cs-tc-main cs-transition cs-btn-nav"
                >
                    <BiLogoCodepen size={30} className='me-2' />Monogram
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    className='py-1 cs-navbar-toggle shadow-none'
                >
                    <MdMenu size={25} className='my-0' />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='cs-fs-7'>
                    <Nav className='ms-auto cs-tc-main'>
                        <Nav.Link className="text-uppercase cs-tc-main cs-transition cs-btn-nav">How it works</Nav.Link>
                        <NavDropdown title='Workflows' className="text-uppercase cs-tc-main">
                            <NavDropdown.Item className="text-uppercase cs-fs-7">Audio console</NavDropdown.Item>
                            <NavDropdown.Item className="text-uppercase cs-fs-7">Photo console</NavDropdown.Item>
                            <NavDropdown.Item className="text-uppercase cs-fs-7">Video console</NavDropdown.Item>
                            <NavDropdown.Item className="text-uppercase cs-fs-7">Mini console</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-uppercase cs-tc-main cs-transition cs-btn-nav">Download</Nav.Link>
                        <Nav.Link className="text-uppercase cs-tc-main cs-transition cs-btn-nav">Blog</Nav.Link>
                        <Nav.Link className="text-uppercase cs-tc-main cs-transition cs-btn-nav">Support</Nav.Link>
                        <Nav.Link className="text-uppercase cs-tc-main cs-transition cs-btn-nav">Shop</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}