/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/header-img.png';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ['Front-End Developer', 'Back-End Developer', 'UI/UX Designer'];
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex((prevIndex) => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    const tiker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(tiker);
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs="12" md="6" xl="7">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>{"Hi, I'm Raphael, "}</h1>
                  <h1 className="wrap">{text}</h1>
                  <p>
                    I&apos;m a full-stack web developer with a strong passion
                    for writing clean, accessible code. My expertise lies in various languages,
                    frameworks, and technologies. I am particularly skilled in JavaScript, React,
                    HTML5, CSS3, Ruby, Rails, and Postgres.
                  </p>
                  <button type="submit">
                    <a href="https://docs.google.com/document/d/1hUiF4yhThfa84WraVexd1Gu8RKkDCW1Qkt63vkr6dak/edit?usp=sharing" target="_blank" className="cv" rel="noreferrer">
                      Get my Resume
                      <ArrowDownCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="headder" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
