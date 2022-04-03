import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Title from "./components/Title";
import AddForm from "./form/AddForm";
import TaskList from "./tasklist/TaskList";
import { Row, Col } from "react-bootstrap";
import BadList from "./tasklist/BadList";

function App() {
  // state to store the task liste

  const [taskLists, setTaskLists] = useState([]);

  const addToTaskList = (newInfo) => {
    setTaskLists([...taskLists, newInfo]);
  };

  console.log(taskLists);

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
            <TaskList taskLists={taskLists} />
          </Col>
          <Col md="6">
            <BadList />
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>The total hours is: 15hrs</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
