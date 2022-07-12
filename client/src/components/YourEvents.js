import React, { useEffect, useState, useCallback } from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function YourEvents() {

  const [yourEventsData, setYourEventsData] = useState([]);
  const [boroughsData, setBoroughsData] = useState([]);
  const [eventTypesData, setEventTypesData] = useState([]);
  const [friendsData, setFriendsData] = useState([]);

  const [editInputState, setEditInputState] = useState('');
  const [editState, setEditState] = useState([]);
  const [showDeletedState, setShowDeletedState] = useState(false);


  useEffect(() => {
    let arr = []
    for (let i = 0; i < yourEventsData.length; i++) {
      arr.push(false)
    }

    setEditState(arr)
  }, [yourEventsData])

  let updateFriends = useCallback((id, index) => {
    let newArr = [...friendsData]
    fetch(`http://localhost:9292/edit-friends/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: editInputState,
        friend_id: id
      }),
    })
      .then(resp => resp.json())
      .then(data => {
        newArr[index] = data
        setFriendsData(newArr)
      }).then(console.log(newArr))
  }, [editInputState, friendsData])

  useEffect(() => {
    fetch('http://localhost:9292/your-events')
      .then(resp => resp.json())
      .then(data => setYourEventsData(data))

    fetch('http://localhost:9292/boroughs')
      .then(resp => resp.json())
      .then(data => setBoroughsData(data))

    fetch('http://localhost:9292/event_types')
      .then(resp => resp.json())
      .then(data => setEventTypesData(data))

    fetch('http://localhost:9292/friends')
      .then(resp => resp.json())
      .then(data => {
        setFriendsData(data)
      })
  }, [])

  // Thie function transfer date to the format we want
  let dateConverter = (data) => {
    let dateEndIdx = data.indexOf("T")
    let date = data.slice(dateEndIdx-10, dateEndIdx).split('-')
    let newDateFormat = date.join('/')
    return (newDateFormat)
  }

  // Thie function transfer 24hr time format to 12hr time format
  let timeConverter = (data) => {
    let timeStartIdx = data.indexOf("T") + 1
    let hours = data.slice(timeStartIdx, timeStartIdx + 2)
    let hoursInTwelve = (parseInt(hours) % 12) || 12;
    let AMOrPM = parseInt(hours) >= 12 ? 'PM' : 'AM';
    let minutes = data.slice(timeStartIdx + 3, timeStartIdx + 5)
    let ampmFormat = hoursInTwelve + ":" + minutes + " " + AMOrPM
    return (ampmFormat)
  }


  const [dateValue, setDateValue] = useState(new Date()); 
  const [showAll, setShowAll] = useState(true)

  function changeDate(e) {
    
    setDateValue(e)
    setShowAll(false)
  }

  // the value from calendar is an object rather than a string
  // Have to use JSON.stringify to change it to string
  // Then use dateConverter to make it same format we had in cards
  function calendarDateToFormat (dateValue) {
    let dateStr = JSON.stringify(dateValue)
    let dateStrFormat = dateConverter(dateStr)
    return dateStrFormat
  }

  function showAllEvents () {
    setShowAll(true)
  }
  
  let displayedData = yourEventsData
  if (!showAll) {
    displayedData = yourEventsData.filter(event => dateConverter(event.start_date_time) === calendarDateToFormat (dateValue))
  }

  const handleEdit = (e, index ,id) => {
    let indexInt = parseInt(index)
    setEditState(editState => editState.map((item, idx) => idx === indexInt ? !item : item))

    if (e.target.textContent === 'Done Editing' && editInputState !== '') {
      updateFriends(id, index)
    }
  }

  function handleDelete(e, event_id) {
    let newArr = [...yourEventsData]
    fetch(`http://localhost:9292/your-events/delete/${event_id}`, {
      method: 'DELETE',
    })
      .then(setYourEventsData(newArr.filter(item => item.id !== event_id)))
      .then(changeStateTrue())
  }

  const changeStateTrue = () => {
    setShowDeletedState(true)
    setTimeout(changeStateToFalse, 2000)
  }

  const changeStateToFalse = () => {
    setShowDeletedState(false)
  }

  return (
    <div>

      {showDeletedState ?
        <span className='text-center'>
          <Alert variant={"danger"} className="fs-3 sticky-top">Your Event Was Deleted!</Alert>
        </span>
        :
        null
      }
      <div>
        <Calendar onChange={(e)=>changeDate(e)} value={dateValue}/>
        <Button variant="outline-dark" onClick={showAllEvents}>Show All</Button>
      </div>
      <Row xs={1} md={2} lg={4} className="justify-content-center">
        {
        displayedData.map(event => {
              return (
                <Col className="m-3" key={event.id}>
                  <Card style={{ width: '18rem' }} bg="light">
                    <Card.Body>
                      <Card.Title className="fs-3">{event.event_name}</Card.Title>
                      <Card.Text>
                        <span className="fw-bold">Location:</span>
                        <span className="mx-2">{event.event_location}</span>
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
    
                      <ListGroup.Item>
                        <span className="fw-bold">Borough:</span>
                        <span className="mx-2">{(boroughsData.filter(borough => borough.id === event.borough_id)).map(borough => borough.borough_name)}</span>
                      </ListGroup.Item>
    
                      <ListGroup.Item>
                        <span className="fw-bold">Event Date:</span>
                        <span className="mx-2">{dateConverter(event.start_date_time)}</span>
                      </ListGroup.Item>
    
                      <ListGroup.Item>
                        <span className="fw-bold">Start Time:</span>
                        <span className="mx-2">{timeConverter(event.start_date_time)}</span>
                      </ListGroup.Item>
    
                      <ListGroup.Item>
                        <span className="fw-bold">End Time:</span>
                        <span className="mx-2">{timeConverter(event.end_date_time)}</span>
                      </ListGroup.Item>
    
                      <ListGroup.Item>
                        <span className="fw-bold">Event Type:</span>
                        <span className="mx-2">{(eventTypesData.filter(type => type.id === event.event_type_id)).map(type => type.event_type_name)}</span>
                      </ListGroup.Item>
    
                      {editState[Object.keys(yourEventsData).find(key => yourEventsData[key] === event)] ?
                        <ListGroup.Item>
                          <InputGroup className="mb-3">
                            <textarea className="form-control" placeholder="Invite Friends" aria-label="With textarea" onChange={(e) => setEditInputState(e.target.value)}>
                              {(friendsData.filter(friend => friend.your_event_id === event.id)).map(friend => friend.group_of_names)}
                            </textarea>
                          </InputGroup>
                        </ListGroup.Item>
                        :
                        <ListGroup.Item>
                          <span className="fw-bold">Friends:</span>
                          <span className="mx-2">{(friendsData.filter(friend => friend.your_event_id === event.id)).map(friend => friend.group_of_names)}</span>
                        </ListGroup.Item>
                      }
    
                      <Button variant="outline-dark" onClick={(e) => handleEdit(e , Object.keys(yourEventsData).find(key => yourEventsData[key] === event) , event.id)} >{editState[Object.keys(yourEventsData).find(key => yourEventsData[key] === event)] ? "Done Editing" : "Edit Invitation"}</Button>
    
                      <Button variant="outline-dark" onClick={(e) => handleDelete(e, event.id)}>Delete My Event</Button>
                    </ListGroup>
                  </Card>
                </Col>
              )//return     
          })//yourEventsData.map
        }

      </Row>
    </div>
  )
}

export default YourEvents