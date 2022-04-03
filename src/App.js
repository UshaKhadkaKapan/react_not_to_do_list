import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Title from "./components/Title";
import AddForm from "./form/AddForm";
import TaskList from "./tasklist/TaskList";
import { Row, Col } from "react-bootstrap";

function App() {
  // state to store the task liste

  const [taskLists, setTaskLists] = useState([]);

  const addToTaskList = (taskObj) => {
    setTaskLists([...taskLists, taskObj]);
    console.log(taskLists);
  };
  return (
    <div className="wrapper">
      <Container>
        {/* title comp */}
        <Title />
        {/* from comp */}
        <AddForm addToTaskList={addToTaskList} />
        <hr />

        {/* task list component */}
        <Row>
          <Col md="6">
            <TaskList />
          </Col>
          <Col md="6"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
