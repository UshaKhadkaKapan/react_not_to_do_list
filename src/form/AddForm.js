import { Button } from "react-bootstrap";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddForm = () => {
  return (
    <div>
      <Form>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control placeholder="Tasks..." />
          </Col>
          <Col md={3}>
            <Form.Control placeholder="Hour" />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              {" "}
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddForm;
