import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};
const AddForm = () => {
  const [task, setTask] = useState(initialState);

  console.log(task);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <div>
      <Form>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Tasks..."
              onChange={handleOnChange}
              type="text"
            />
          </Col>
          <Col md={3}>
            <Form.Control
              name="hr"
              placeholder="Hour"
              onChange={handleOnChange}
              type="number"
            />
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
