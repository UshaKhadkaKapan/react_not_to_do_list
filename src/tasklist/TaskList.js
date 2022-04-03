import React from "react";
import { Col, Row, Form, Table, Button } from "react-bootstrap";

const TaskList = ({ taskLists }) => {
  return (
    <div>
      <h2 className="text-center">Task List</h2>

      <hr />
      {/* task list */}
      <Table striped bordered hover>
        <tbody>
          {taskLists.map((task, i) => (
            <tr>
              <td>
                <Form.Check type="checkbox" label="Check me out" />
              </td>
              <td>{task.task}</td>
              <td>{task.hr}Hour</td>
              <td className="text-end">
                <Button variant="danger">
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
                <Button variant="primary">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
