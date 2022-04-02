import { Container } from "react-bootstrap";
import "./App.css";
import Title from "./components/Title";
import AddForm from "./form/AddForm";
import TaskList from "./tasklist/TaskList";

function App() {
  return (
    <div className="wrapper">
      <Container>
        {/* title comp */}
        <Title />
        {/* from comp */}
        <AddForm />
        <hr />

        {/* task list component */}
        <TaskList />
      </Container>
    </div>
  );
}

export default App;
