import React from 'react';
import { ListGroup, Col, Container, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function ManageCountry() {
  return (
    <div>
      <Container className="justify-content-md-center admin-page__container">
        <Col sm={12} md={6}>
          Countries: 
          <ListGroup>
            {
              [{ country: 'Belarus' }, { country: 'Russia' } ].map(({ country } ) => (
                <ListGroup.Item className="admin-page__row-item" key={uuidv4()}>
                  <div>
                    {country}
                  </div>
                  <Button variant="primary" size="sm">Remove</Button>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
          <section className="admin-page__add-section">
            <input type="text" placeholder="Country" />
            <Button className="admin-page__add-btn" variant="primary" size="sm">Add</Button>
          </section>
        </Col>
      </Container>
    </div>
  )
}

export default ManageCountry
