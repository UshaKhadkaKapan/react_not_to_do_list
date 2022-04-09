import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./App.css";
import Title from "./components/Title";
import AddForm from "./form/AddForm";
import TaskList from "./tasklist/TaskList";
import { Row, Col } from "react-bootstrap";
import BadList from "./tasklist/BadList";

function App() {
  // state to store the task liste

  const [taskLists, setTaskLists] = useState([]);
  const [badLists, setBadLists] = useState([]);

  const addToTaskList = (newInfo) => {
    setTaskLists([...taskLists, newInfo]);
    console.log([...taskLists]);
    console.log(newInfo);
  };

  // remove item from the item list
  const removeFromTaskList = (i) => {
    const filteredArg = taskLists.filter((item, index) => index !== i);
    setTaskLists(filteredArg);
  };

  const shiftToTheBadList = (i) => {
    const item = taskLists[i];
    console.log(item);

    setBadLists([...badLists, item]);

    removeFromTaskList(i);

    // get the item that to be shifted
    // add the item in the bad ListGrou
    // premove the item from the task list
  };

  const removeFromBadList = (i) => {
    const badListFilter = badLists.filter((item, index) => index !== i);
    setBadLists(badListFilter);
  };

  const shiftToTheTaskList = (i) => {
    const item = taskLists[i];

    setTaskLists([...taskLists, item]);

    removeFromBadList(i);
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
            <TaskList
              taskLists={taskLists}
              removeFromTaskList={removeFromTaskList}
              shiftToTheBadList={shiftToTheBadList}
            />
          </Col>
          <Col md="6">
            <BadList
              badLists={badLists}
              shiftToTheTaskList={shiftToTheTaskList}
              removeFromBadList={removeFromBadList}
            />
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
