import React, { useEffect, useState, useCallback } from "react";
import CardForYourEvents from "./CardForYourEvents";

import Alert from "react-bootstrap/Alert";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function YourEvents({ user }) {
  const [yourEventsData, setYourEventsData] = useState([]);

  const [showDeletedState, setShowDeletedState] = useState(false);

  const [editInputState, setEditInputState] = useState("");
  const [editState, setEditState] = useState([]);
  const [commentState, setCommentState] = useState("");

  // useEffect(() => {
  //   let arr = [];
  //   for (let i = 0; i < yourEventsData.length; i++) {
  //     arr.push(false);
  //   }
  //   setEditState(arr);
  // }, [yourEventsData]);

  let sum = 0;
  yourEventsData.map((event) => {
    return (sum += event.comments.length);
  });

  // useEffect(() => {
  //   let arr = [];
  //   for (let i = 0; i < sum; i++) {
  //     arr.push(false);
  //   }
  //   setEditState(arr);
  // }, [sum]);

  console.log(editState);

  useEffect(() => {
    fetch(`/my-events/${user.id}`)
      .then((resp) => resp.json())
      .then((data) => setYourEventsData(data));
  }, [user]);

  let deleteEvent = (event) => {
    let id = event.event.id;
    let newArr = [...yourEventsData];

    fetch(`/delete-my-event/${id}`, {
      method: "DELETE",
    })
      .then(setYourEventsData(newArr.filter((item) => item.id !== id)))
      .then(changeStateTrue());
  };

  const changeStateTrue = () => {
    setShowDeletedState(true);
    setTimeout(changeStateToFalse, 2000);
  };

  const changeStateToFalse = () => {
    setShowDeletedState(false);
  };

  let handleCommentEdit = () => {};

  let handleCommentState = () => {};

  return (
    <>
      {/* {let pleaseWork = 'hi'} */}
      {showDeletedState ? (
        <span className="text-center">
          <Alert variant={"danger"} className="fs-3 sticky-top">
            Your Event Was Deleted!
          </Alert>
        </span>
      ) : null}

      {yourEventsData.length === 0 ? (
        <span className="text-center">
          <Alert variant={"danger"} className="fs-3 sticky-top">
            You Have No Events
          </Alert>
        </span>
      ) : (
        <CardForYourEvents
          events={yourEventsData}
          handleDelete={deleteEvent}
          onCommentEdit={handleCommentEdit}
          onCommentState={handleCommentState}
          editState = {editState}
        />
      )}
    </>
  );
}

export default YourEvents;
