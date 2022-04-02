import React from "react";
import { Col, Row, Form, Table, Button } from "react-bootstrap";

const Tasklist = () => {
  return (
    <div>
      <Row>
        <Col md="6">
          <h2 className="text-center">Task List</h2>
          <hr />
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>
                  <Form.Check type="checkbox" label="Check me out" />
                </td>
                <td>Task Name</td>
                <td>Hour</td>
                <td className="text-end">
                  <Button variant="danger">
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>{" "}
                  <Button variant="primary">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md="6">
          <h2 className="text-center">Bad List</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Tasklist;
