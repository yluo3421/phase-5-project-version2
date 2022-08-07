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
            src="https://juniortech.org/wp-content/uploads/2019/04/algorithm-icon-362x320px.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Introduction</Nav.Link>
          <Nav.Link href="/visualizer">Dijkstra</Nav.Link>
          <Nav.Link href="/pathfinding">Astar</Nav.Link>
          <Nav.Link href="/personal-events">Discussion</Nav.Link>
        </Nav>
        <Button onClick={handleLogoutClick} >Logout</Button>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
