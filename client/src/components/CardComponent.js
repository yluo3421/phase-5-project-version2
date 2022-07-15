import React, { useState , useEffect} from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import ReactPaginate from "react-paginate";

function CardComponent({ events, handlePost }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(events.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(events.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, events]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % events.length;
    setItemOffset(newOffset);
  };

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

  return (
    <>
      <Row xs={1} md={2} lg={4} className="justify-content-center">
        {currentItems.map((event) => {
          return (
            <Col className="m-3" key={event.event_id}>
              <Card style={{ width: "18rem" }} bg="light">
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
                    <span className="mx-2">{event.event_borough}</span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className="fw-bold">Event Date:</span>
                    <span className="mx-2">
                      {dateConverter(event.start_date_time)}
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className="fw-bold">Start Time:</span>
                    <span className="mx-2">
                      {timeConverter(event.start_date_time)}
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className="fw-bold">End Time:</span>
                    <span className="mx-2">
                      {timeConverter(event.end_date_time)}
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className="fw-bold">Event Type:</span>
                    <span className="mx-2">{event.event_type}</span>
                  </ListGroup.Item>

                  <Button
                    variant="outline-dark"
                    onClick={(e) => handlePost({ e, event })}
                  >
                    Add To Your Events
                  </Button>
                </ListGroup>
              </Card>
            </Col>
          );
        })}
      </Row>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

export default CardComponent;
