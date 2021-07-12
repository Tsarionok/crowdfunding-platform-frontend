import React from 'react';
import { ListGroup, Col, Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCategory, removeCategory } from '../../../redux/actions';

function ManageCategory({ categories }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const onChange = React.useCallback((e) => {
    setInputValue(e.target.value);
  }, []); 

  const onAddCategory = React.useCallback(() => {
    setInputValue('');
    dispatch(addCategory(inputValue))
  }, [dispatch, inputValue]);

  const onRemoveCategory = React.useCallback((id) => {
    dispatch(removeCategory(id));
  }, [dispatch]);

  return (
    <div>
      <Container className="justify-content-md-center admin-page__container">
        <Col sm={12} md={6}>
          Categories: 
          <ListGroup>
            {
              categories && categories.map(({ name, id } ) => (
                <ListGroup.Item className="admin-page__row-item" key={uuidv4()}>
                  <div>
                    {name}
                  </div>
                  <Button variant="primary" size="sm" onClick={() => onRemoveCategory(id)}>Remove</Button>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
          <section className="admin-page__add-section">
            <input type="text" placeholder="Category" value={inputValue} onChange={onChange} />
            <Button className="admin-page__add-btn" variant="primary" size="sm" onClick={onAddCategory}>Add</Button>
          </section>
        </Col>
      </Container>
    </div>
  )
}

export default ManageCategory;
