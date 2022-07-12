import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

import CardComponent from './CardComponent';

function HomePage() {

  const [events, setEvents] = useState([]);
  const [inputState, setInputState] = useState('');
  const [showAddedState , setShowAddedState] = useState(false);

  

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/tvpp-9vvx.json')
      .then(resp => resp.json())
      .then(data => {
        setEvents(data.slice(0,200))
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

  const handlePost = ({e, event, inputState }) => {
    fetch('http://localhost:9292/add-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event,
        inputState
      }),
    })
    .then(setInputState(''))
    .then(changeStateTrue())
  }

  const changeStateTrue = () =>{
    setShowAddedState(true)
    setTimeout(changeStateToFalse , 2000)
  }

  const changeStateToFalse = () => {
    setShowAddedState(false)
  }

  return (
    <div>
      
      <span className='text-center'>
        <h1 className="fs-1 my-2">All New York City Permitted Events</h1>
      </span>

      {showAddedState ?
      <span className='text-center'>
        <Alert variant={"success"} className="fs-3 sticky-top">Your Event Was Added!</Alert>
      </span>
      :
      null
      }
      <CardComponent 
        events = {events} 
        dateConverter = {dateConverter}
        timeConverter = {timeConverter}
        handlePost = {handlePost}
        setInputState = {setInputState}
      />
    </div>
  )
}

export default HomePage