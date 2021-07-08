import React from 'react';
import { ListGroup, Col, Container, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function ManageCity() {
  return (
    <div>
      <Container className="justify-content-md-center admin-page__container">
        <Col sm={12} md={6}>
          Cities: 
          <ListGroup>
            {
              [{ country: 'Belarus', city: 'Minsk' }, { country: 'Belarus', city: 'Grodno'} ].map(({ city, country } ) => (
                <ListGroup.Item className="admin-page__row-item" key={uuidv4()}>
                  <div>
                    {country}, { city }
                  </div>
                  <Button variant="primary" size="sm">Remove</Button>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
          <section className="admin-page__add-section">
            <select name="country">
              <option value="Belarus">Belarus</option>
              <option value="Russia">Russia</option>
            </select>
            <input type="text" placeholder="City" />
            <Button className="admin-page__add-btn" variant="primary" size="sm">Add</Button>
          </section>
        </Col>
      </Container>
    </div>
  )
}

export default ManageCity;
