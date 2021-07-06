import React from 'react';
import Button from 'react-bootstrap/Button';
import { Slider } from '../..';

function CreateProject() {
  return (
    <div className="CreateProjectPage Center-Block">
      <h5>Create Project</h5>
      <Slider photoLinks={['https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg', 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg']}/>
      <Button variant="primary">Submit</Button>
    </div>
  )
}

export default CreateProject;
