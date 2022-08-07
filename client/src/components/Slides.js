import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slides() {
return (
    <div>
        <Carousel >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b637e128570183.55c740e9c017c.jpg"
              alt="First slide"
              height={600}
            />
            <Carousel.Caption>
              <h3>Map in the Game</h3>
              <p>How does the game know what is the fastest route from one place to another?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i0.wp.com/gamingonphone.com/wp-content/uploads/2021/03/Lanes.jpg?resize=708%2C396&ssl=1"
              alt="Second slide"
              height={600}
              width={500}
            />

            <Carousel.Caption>
              <h3>Does the character have a brain?</h3>
              <p>Not that can find a route.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoND34iWnt0FlwOf2vrvUBD5wiis1_tKwrLA&usqp=CAU"
              alt="Third slide"
              height={600}
            />

            <Carousel.Caption>
              <h3>Path Finding</h3>
              <p>
                Magic revealed
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
)
}

export default Slides;