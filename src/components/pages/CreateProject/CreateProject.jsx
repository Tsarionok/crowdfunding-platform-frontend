import React from 'react';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Slider } from '../..';
import './create-project.scss';

function CreateProject({ startDate, endDate, onChangeDate }) {
  return (
    <div className="CreateProjectPage Center-Block">
      <h5>Create Project</h5>
      <Slider photoLinks={['https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg', 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg']}/>
      <div>
        <input type="text" className="CreateProject__ProjectNameInput" placeholder="Project name" />
        <label>
          Category:&nbsp; 
          <select name="Category">
            <option value="FirstCategory">FirstCategory</option>
          </select>
        </label>
      </div>
      <textarea placeholder="description" />
      <div className="CreateProjectPage__DatePickerAndTotalSum">
        <DatePicker selected={endDate || startDate} onChange={(date) => onChangeDate(date)} />
        <input type="text" placeholder="Total Donation Sum" />
      </div>
      <Button variant="primary">Submit</Button>
    </div>
  )
}

export default CreateProject;
