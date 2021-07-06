import React from 'react';
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './slider.scss';

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  margin: 0 15px;
`;

function Slider({ photoLinks }) {

  const RenderSlider = () => {
    if (photoLinks) return (
      <Carousel className="project-images">
        {
          photoLinks.map((link, index) => (
            <Item>
              <img
                style={{ height: '100%' }}
                src={link}
                alt={`${index}`}
                key={`${link}_${index}`}
              />
            </Item>
          ))
        }
      </Carousel>
    )
    else return null;
  }

  return (
    <RenderSlider />
  );
}

Slider.propTypes = {
  photoLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;