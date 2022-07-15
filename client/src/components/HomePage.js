import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

import CardComponent from "./CardComponent";

function HomePage({user}) {
  const [events, setEvents] = useState([]);
  const [showAddedState, setShowAddedState] = useState(false);

  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/tvpp-9vvx.json")
      .then((resp) => resp.json())
      .then((data) => {
        // setEvents(data);
        setEvents(data.slice(0, 200));
      });
  }, []);

  const handlePost = ({ event }) => {
    // console.log(event);
    let postObject = {
      event_id: event.event_id,
      event_location: event.event_location,
      event_name: event.event_name,
      start_date_time: event.start_date_time,
      end_date_time: event.end_date_time,
      event_borough: event.event_borough,
      event_type: event.event_type,
      user_id: user.id,
    };
    console.log(postObject);
    fetch("/new-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObject),
    }).then(changeStateTrue());
  };

  const changeStateTrue = () => {
    setShowAddedState(true);
    setTimeout(changeStateToFalse, 2000);
  };

  const changeStateToFalse = () => {
    setShowAddedState(false);
  };

  return (
    <div>
      <span className="text-center">
        <h1 className="fs-1 my-2">All New York City Permitted Events</h1>
      </span>

      {showAddedState ? (
        <span className="text-center">
          <Alert variant={"success"} className="fs-3 sticky-top">
            Your Event Was Added!
          </Alert>
        </span>
      ) : null}
      <CardComponent
        events={events}
        handlePost={handlePost}
      />
    </div>
  );
}

export default HomePage;
