import React from 'react';
import { ListGroup, Col, Container, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addCountry, removeCountry } from '../../../redux/actions';

function ManageCountry({ countries }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const onChange = React.useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const onAddCountry = React.useCallback(() => {
    setInputValue('');
    dispatch(addCountry(inputValue));
  }, [dispatch, inputValue]);

  const onRemoveCountry = React.useCallback((id) => {
    dispatch(removeCountry(id));
  }, [dispatch]);

  return (
    <div>
      <Container className="justify-content-md-center admin-page__container">
        <Col sm={12} md={6}>
          Countries: 
          <ListGroup>
            {
              countries && countries.map(({ name, id } ) => (
                <ListGroup.Item className="admin-page__row-item" key={uuidv4()}>
                  <div>
                    {name}
                  </div>
                  <Button variant="primary" size="sm" onClick={() => onRemoveCountry(id)}>Remove</Button>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
          <section className="admin-page__add-section">
            <input type="text" placeholder="Country" value={inputValue} onChange={onChange} />
            <Button className="admin-page__add-btn" variant="primary" size="sm" onClick={onAddCountry}>Add</Button>
          </section>
        </Col>
      </Container>
    </div>
  )
}

export default ManageCountry
