import React from 'react';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import ImageUploader from 'react-images-upload';
import { Slider } from '../..';
import { addProject } from '../../../redux/actions';
import './create-project.scss';

function CreateProject({ 
  startDate, 
  endDate, 
  categories,
  totalDonationSum,
  description,
  projectName,
  selectedCategory,
  onCreateProject, 
  onChangeDate, 
  onSelectCategory, 
  onChangeInput,
  onPhotosChange
}) {
  return (
    <div className="CreateProjectPage Center-Block">
      <h5>Create Project</h5>
      <Slider photoLinks={['https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg', 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg']}/>
      <ImageUploader
        withIcon={true}
        withPreview={true}
        buttonText={`Choose images`}
        onChange={onPhotosChange}
        imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
        maxFileSize={5242880}
      />
      <div>
        <input type="text" className="CreateProject__ProjectNameInput" name="projectName" value={projectName} placeholder="Project name" onChange={onChangeInput} />
        <label>
          Category:&nbsp; 
          <select name="Category" value={selectedCategory} onChange={onSelectCategory}>
            { categories && categories.map(({ name }) => (
              <option value={name} key={uuidv4()}>{name}</option>
            ))}
          </select>
        </label>
      </div>
      <input placeholder="description" name="description" value={description} onChange={onChangeInput} />
      <div className="CreateProjectPage__DatePickerAndTotalSum">
        <DatePicker selected={startDate} onChange={(date) => onChangeDate('startDate', date)} />
        <DatePicker selected={endDate} onChange={(date) => onChangeDate('endDate', date)} />
        <input type="text" name="totalDonationSum" placeholder="Total Donation Sum" value={totalDonationSum} onChange={onChangeInput} />
      </div>
      <Button variant="primary" onClick={onCreateProject}>Submit</Button>
    </div>
  )
}

export default CreateProject;
