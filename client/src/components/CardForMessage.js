import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";



function CardForMessage({ events, handleDelete, onUpdateLike }) {

    // Thie function transfer date to the format we want
    let dateConverter = (data) => {
        let dateEndIdx = data.indexOf("T");
        let date = data.slice(dateEndIdx - 10, dateEndIdx).split("-");
        let newDateFormat = date.join("/");
        return newDateFormat;
    };

    // Thie function transfer 24hr time format to 12hr time format
    let timeConverter = (data) => {
        let timeStartIdx = data.indexOf("T") + 1;
        let hours = data.slice(timeStartIdx, timeStartIdx + 2);
        let hoursInTwelve = parseInt(hours) % 12 || 12;
        let AMOrPM = parseInt(hours) >= 12 ? "PM" : "AM";
        let minutes = data.slice(timeStartIdx + 3, timeStartIdx + 5);
        let ampmFormat = hoursInTwelve + ":" + minutes + " " + AMOrPM;
        return ampmFormat;
    };
    
    function handleLike(id) {
        console.log(id)
        fetch(`/usermessages/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({
                likes: 100
            }),
        })
            .then((r) => r.json())
            .then((updatedMessage) => onUpdateLike(updatedMessage));
    }

    return (
        <>
        <Row xs={1} md={2} lg={4} className="justify-content-center">
        {events.map((message) => {
          return (
            <Col className="m-3" key={message.id}>
              <Card style={{ width: "18rem" }} bg="light" >
                <Card.Body>
                  <Card.Title className="fs-3">{message.user.username}</Card.Title>
                  <Card.Text>
                    <span className="fw-bold">{dateConverter(message.created_at) + " " + timeConverter(message.created_at)}</span>
                    <span className="mx-2"></span>
                  </Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">

                  <ListGroup.Item>
                    <span className="fw-bold">Message </span>
                    <span className="mx-2">
                      {message.message}
                    </span>
                  </ListGroup.Item>
        
                  
                  <Button
                    variant="outline-dark"
                    onClick={() => handleLike(message.id)}
                  >
                    Likes {message.like}
                  </Button>
                  <Button
                    variant="outline-dark"
                    onClick={() => handleDelete({ message })}
                  >
                    Delete Message
                  </Button>
                </ListGroup>
              </Card>
            </Col>
          
          );
        })}
      </Row>
        </>
        
    )
}

export default CardForMessage;