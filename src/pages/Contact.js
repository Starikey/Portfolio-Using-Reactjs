import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" required placeholder="Message" />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              If you want to chat about a project — email me on
              jyotisi924@gmail.com.
            </p>
            <p>
              I want to be a software developer in the upcoming future.
              Do designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.{" "}
            </p>
            <p>
              Currently,I am a final yearite student.Pursuing B.tech in Computer Science Engineering 
              from United College Of Engineering And Research,Naini,Prayagraj.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroup.Item>
                  <a href="https://www.youtube.com/@freform2023/featured">Youtube </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href=" https://www.linkedin.com/in/jyoti-s-670123214/ ">Linkedin</a>
                </ListGroup.Item>
                <ListGroup.Item>
                <a href="https://www.instagram.com/_isjy_/">
                    Instagram
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href=" https://github.com/Starikey">Github</a>
                </ListGroup.Item>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;