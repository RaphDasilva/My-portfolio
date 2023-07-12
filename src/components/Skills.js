import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaReact, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiRubyonrails } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-bx">
              <h2>Skills</h2>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__backInDown' : ''}>
                    <p>
                      With a strong passion for writing clean, accessible code,
                      <br />
                      {' '}
                      I bring a diverse skill set to the table,
                      encompassing full-stack web development.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel responsive={responsive} infinite className="skills-slider">
                <div className="item">
                  <FaHtml5 className="icon" />
                  <h5>HTML5</h5>
                </div>

                <div className="item">
                  <FaCss3 className="icon" />
                  <h5>CSS3</h5>
                </div>

                <div className="item">
                  <SiJavascript className="icon" />
                  <h5>JavaScript</h5>
                </div>

                <div className="item">
                  <FaReact className="icon" />
                  <h5>React</h5>
                </div>

                <div className="item">
                  <SiRedux className="icon" />
                  <h5>Redux</h5>
                </div>

                <div className="item">
                  <BsBootstrap className="icon" />
                  <h5>Bootstrap</h5>
                </div>

                <div className="item">
                  <AiFillGithub className="icon" />
                  <h5>Github</h5>
                </div>

                <div className="item">
                  <SiRubyonrails className="icon" />
                  <h5>Ruby on Rails</h5>
                </div>
              </Carousel>
              <img className="background-img-left" src={colorSharp} alt="background img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
