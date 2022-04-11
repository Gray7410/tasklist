import React, { useState } from "react";
import ReactDOM from "react-dom";
import TasksList from "./components/tasksList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Первая задача" },
    { id: 1, title: "Вторая задача" },
    { id: 1, title: "Третья задача" },
  ]);
  return (
    <>
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  );
}
export default App;
