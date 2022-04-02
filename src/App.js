import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Title from "./components/Title";
import AddForm from "./form/AddForm";
import TaskList from "./tasklist/TaskList";

function App() {
  // state to store the task liste

  const [taskLists, setTaskLists] = useState([]);

  const addToTaskList = (taskObj) => {
    setTaskLists([...taskLists, taskObj]);
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
        <TaskList />
      </Container>
    </div>
  );
}

export default App;
