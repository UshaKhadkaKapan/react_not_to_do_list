import React from "react";
import { Form, Table, Button } from "react-bootstrap";

const BadList = () => {
  return (
    <div>
      <h2 className="text-center">Bad List</h2>
      <hr />
      {/* task list */}
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <Form.Check type="checkbox" label="Check me out" />
            </td>
            <td>Task Name</td>
            <td>Hour</td>
            <td className="text-end">
              <Button variant="warning">
                <i className="fa-solid fa-arrow-left-long"></i>
              </Button>{" "}
              <Button variant="danger">
                <i className="fa-solid fa-trash-can"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 className="mt-5 text-danger">You could have saved:20hrs</h4>
    </div>
  );
};

export default BadList;
