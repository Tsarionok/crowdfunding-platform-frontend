import React from 'react';
import { ListGroup, Col, Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCity, removeCity } from '../../../redux/actions';

function ManageCity({ cities, countries }) {
  console.log(cities, countries)

  const dispatch = useDispatch();

  const [state, setState] = React.useState({ inputValue: '', selectedCountry: '' });

  const onChange = React.useCallback((event) => {
    setState(event.target.value);
  }, []);

  const onAdd = React.useCallback(() => {
    // setState(previousState => ({ ...previousState, inputValue: '' }));
    // dispatch(addCity(state.inputValue, 'Belarus'));
  }, [dispatch, state]);

  const onRemove = React.useCallback((city) => {
    dispatch(removeCity(city));
  }, [dispatch]);

  const onSelectCountry = React.useCallback((e) => {
    setState(previousState => ({ ...previousState, selectedCountry: e.target.value }))
  }, []);

  return (
    <div>
      <Container className="justify-content-md-center admin-page__container">
        <Col sm={12} md={6}>
          Cities: 
          <ListGroup>
            {
              cities && cities.map(({ name } ) => (
                <ListGroup.Item className="admin-page__row-item" key={uuidv4()}>
                  <div>
                    { name }
                  </div>
                  <Button variant="primary" size="sm" onClick={() => onRemove(name)}>Remove</Button>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
          <section className="admin-page__add-section">
            <select name="country">
              { countries && countries.map(({ name }) => (
                <option value={name} key={uuidv4()} onChange={onSelectCountry}>{name}</option>
              )) }
            </select>
            <input type="text" placeholder="City" value={state.inputValue} onChange={onChange} />
            <Button className="admin-page__add-btn" variant="primary" size="sm" onClick={onAdd}>Add</Button>
          </section>
        </Col>
      </Container>
    </div>
  )
}

export default ManageCity;
