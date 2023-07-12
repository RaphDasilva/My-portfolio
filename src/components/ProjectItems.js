/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLink } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Image from 'react-bootstrap/Image';

const ProjectItems = ({ projectContent }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState([]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const changePopupContent = (item) => {
    setPopupContent([item]);
    openPopup();
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="section-center">
      {
          projectContent.map((item) => (
            <article
              className="project-item"
              key={item.id}
              onClick={() => changePopupContent(item)}
            >
              <img src={item.img} alt={item.title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>
                    {item.title}
                  </h4>
                  <h4 className="stacks">
                    {item.stacks}
                  </h4>
                </header>
                <Button className='btn' variant="light" type='submit' onClick={() => changePopupContent(item)}>See Project</Button>
              </div>

            </article>
          ))
        }

      {
         popupOpen
         && (
         <div className="popup">
           {
                popupContent.map((item) => (
                  <div className="popup-content" key={item.id}>
                    <button className="close-button" onClick={closePopup}>
                    <CloseButton aria-label="Hide" />
                    </button>
                    <Image src={item.img} alt={item.title} className="photo" fluid />
                    <div className="item-info">
                      <div className="project-btn">
                        <a href={item.live} target="_blank" rel="noreferrer" className="btn">
                          See Live
                          {' '}
                          <FaLink />
                        </a>
                        <a href={item.github} target="_blank" rel="noreferrer" className="btn">
                          See Source Code
                          {' '}
                          <FaGithub />
                        </a>
                      </div>
                      <header>
                        <h4>
                          {item.title}
                        </h4>
                        <h4 className="stacks">
                          {item.stacks}
                        </h4>
                      </header>
                      <p className="item-text">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))

              }
         </div>
         )

        }

    </div>
  );
};

ProjectItems.propTypes = {
  projectContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectItems;
