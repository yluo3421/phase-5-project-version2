import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

function NavComponent() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container className='fs-3'>
                <Navbar.Brand className='fs-3'>NavBar:</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='/'>Home Page</Nav.Link>
                    <Nav.Link href='/personal-events'>Your Events</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavComponent