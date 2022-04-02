import React from "react";
import { Button, Form } from "react-bootstrap";

const FormRow = () => {
  return (
    <tr>
      <td>
        <Form.Check type="checkbox" label="Check me out" />
      </td>
      <td>Bad Name</td>
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
  );
};

export default FormRow;
