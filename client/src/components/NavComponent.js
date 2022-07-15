import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function NavComponent({user , setUser}) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="fs-3">
        <Navbar.Brand className="fs-3">
          <img
            alt=""
            src="../../PlayInThePark.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          NavBar:
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/personal-events">Your-Events</Nav.Link>
        </Nav>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
