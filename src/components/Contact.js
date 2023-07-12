import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
  const [state, handleSubmit] = useForm('xdojqgbe');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    handleSubmit(event);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact-img" />
          </Col>
          <Col md={6}>
            <h2>Connect with me</h2>
            <form onSubmit={handleFormSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  <ValidationError
                    prefix="First Name"
                    field="firstName"
                    errors={state.errors}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  <ValidationError
                    prefix="Last Name"
                    field="lastName"
                    errors={state.errors}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  <ValidationError
                    prefix="Phone Number"
                    field="phone"
                    errors={state.errors}
                  />
                </Col>

                <Col sm={12} className="px-1">
                  <textarea
                    rows={6}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Col>

                <Col sm={12} className="px-1">
                  {state.succeeded ? (
                    <p>Thanks for contacting me!</p>
                  ) : null}
                </Col>

                <Col sm={12} className="px-1">
                  <button type="submit" disabled={state.submitting}>
                    <span>Submit</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
