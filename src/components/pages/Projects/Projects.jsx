import React from 'react';
import { CardGroup, Card, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function Projects({ cardsRows }) {
  return (
    <>
      { cardsRows && cardsRows.map((cardsRow) => ( 
        <Row key={uuidv4()}>
          <CardGroup>
            { cardsRow && cardsRow.map((card) => (
              <Card key={uuidv4()}>
                <Card.Img variant="top" src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" />
                <Card.Body>
                  <Card.Title>Project title</Card.Title>
                  <Card.Text>
                    Project description
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <button>More Details</button>
                </Card.Footer>
              </Card> 
            )) }
          </CardGroup>
        </Row>
      )) }
    </>
  )
}

export default Projects
