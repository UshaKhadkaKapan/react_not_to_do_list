import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./App.css";
import Title from "./components/Title";
import AddForm from "./form/AddForm";
import TaskList from "./tasklist/TaskList";
import { Row, Col } from "react-bootstrap";
import BadList from "./tasklist/BadList";

const weeklyHrs = 24 * 7;
function App() {
  // state to store the task liste

  const [taskLists, setTaskLists] = useState([]);
  const [badLists, setBadLists] = useState([]);

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
    const item = badLists[i];

    setTaskLists([...taskLists, item]);

    removeFromBadList(i);
  };

  console.log(taskLists);
  // + changes string to Number in ES6
  const taskListTotalHr = taskLists.reduce((acc, item) => acc + +item.hr, 0);
  const badListTotalHr = badLists.reduce((acc, item) => acc + +item.hr, 0);
  const ttlHrs = taskListTotalHr + badListTotalHr;

  const addToTaskList = (newInfo) => {
    if (ttlHrs + newInfo.hr <= weeklyHrs) {
      setTaskLists([...taskLists, newInfo]);
    } else {
      alert("Mate its wrong");
    }
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
              badListTotalHr={badListTotalHr}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>The total hours is: {ttlHrs}hrs</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
