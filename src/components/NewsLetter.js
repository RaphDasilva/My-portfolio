/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';

const NewsLetter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email
        && email.indexOf('@') > -1
        && onValidated({
          EMAIL: email,
        });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={6}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h2>Subscribe to my newsletter</h2>
            {status === 'sending' && <Alert variant="info">sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default NewsLetter;
