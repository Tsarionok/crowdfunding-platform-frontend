import React from 'react';
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap';
import { ProgressBar, Slider } from '../..';
import './single-project.scss';

function SingleProject({ 
    handleRatingChange, 
    progressValue, 
    rating, 
    projectName,
    ownerFullName,
    category,
    description,
    startDate,
    endDate
  }
) {
  return (
    <div className="SingleProjectPage">
      <div>{projectName}</div>
      <div>by</div>
      <div>{ownerFullName}</div>
      <div>{category}</div>
      <Slider photoLinks={['https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg', 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg']}/>
      <div className="SingleProject__RatingWrapper">
        <div>
          <Rating className="SingleProject__Rating" ratingValue={rating} onClick={handleRatingChange} />
          <div className="single-project-page__date-wrapper">
            <div>Start date: {startDate}</div>
            <div>Final date: {endDate}</div>
          </div>
        </div>
        <Button className="single-project-page__add-btn" variant="primary" size="sm">Add to favourites</Button>
      </div>
      <div>{description}</div>
      <div className="single-project-page__progress-wrapper">
        <ProgressBar progressValue={progressValue} />
        <div>0 / 100 $</div>
      </div>
    </div>
  )
}

export default SingleProject;
