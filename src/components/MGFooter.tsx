"use client";
//Bootstrap
import { Container, Row, Col, Nav, Button, Form, InputGroup } from 'react-bootstrap';
//Icons
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function MGFooter() {
    return (
        <Container fluid className='cs-bg-navbar cs-tc-main py-5 user-select-none'>
            <Container className='px-0'>
                <Row className='mx-0 gap-lg-0 gap-3'>
                    <Col lg={2} xs={12} className='px-0'>
                        <h6 className='text-uppercase fw-bold'>Monogram</h6>
                        <p className='cs-fs-7'>305 King st. W.<br />
                        Suit 502<br />
                        Kitchener, ON<br />
                        Canada</p>
                    </Col>
                    <Col lg={2} xs={12} className='px-0'>
                        <h6 className='text-uppercase fw-bold'>Quick links</h6>
                        <Nav className='flex-column gap-1'>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Home</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>How it Works</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Shop</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Download</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={2} xs={12} className='px-0'>
                        <h6 className='text-uppercase fw-bold'>Help</h6>
                        <Nav className='flex-column gap-1'>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>FAQs</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Support Center</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Shipping and Sales</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={2} xs={12} className='px-0'>
                        <h6 className='text-uppercase fw-bold'>Information</h6>
                        <Nav className='flex-column gap-1'>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>About Us</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Work with us</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Privacy Policy</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Terms of Use</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Terms of Sale</Nav.Link>
                            <Nav.Link className='p-0 cs-fs-7 cs-tc-main cs-transition cs-btn-nav'>Press Kit</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={4} xs={12} className='px-0'>
                        <h6 className='text-uppercase fw-bold'>Subscribe to monogram</h6>
                        <p className='cs-fs-7'>Master productivity with Creative Console and get all latest Monogram news.</p>
                        <InputGroup className='gap-3'>
                            <Form.Control
                                placeholder='Email Address'
                                className='rounded-0 bg-transparent cs-bc shadow-none cs-tc-main cs-form'
                            />
                            <Button 
                                type='button' 
                                className='cs-btn text-uppercase rounded-pill px-4 cs-bc cs-transition fw-semibold'
                            >
                                Submit
                            </Button>
                            <Container className='px-0 d-flex flex-row align-items-center justify-content-lg-start justify-content-center gap-3'>
                                <Button 
                                    type='button' 
                                    className='p-2 cs-btn text-uppercase rounded-circle cs-bc cs-transition fw-semibold'
                                >
                                    <FaInstagram size={25} />
                                </Button>
                                <Button 
                                    type='button' 
                                    className='p-2 cs-btn text-uppercase rounded-circle cs-bc cs-transition fw-semibold'
                                >
                                    <FaTwitter size={25} />
                                </Button>
                                <Button 
                                    type='button' 
                                    className='p-2 cs-btn text-uppercase rounded-circle cs-bc cs-transition fw-semibold'
                                >
                                    <FaFacebookF size={25} />
                                </Button>
                                <Button 
                                    type='button' 
                                    className='p-2 cs-btn text-uppercase rounded-circle cs-bc cs-transition fw-semibold'
                                >
                                    <FaYoutube size={25} />
                                </Button>
                            </Container>
                            <p className='cs-fs-7 text-lg-start text-center w-100'>Monogram 2023</p>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}