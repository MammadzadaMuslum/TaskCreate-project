import React, { useEffect, useContext } from "react";
import Task from "./Task";
import TaskList from "./TaskList";
import TaskContext from "./Context/auth-context";

function App() {
  const { fetchTasks } = useContext(TaskContext);
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div>
      <Task />
      <h2>Tasklar</h2>
      <TaskList />
    </div>
  );
}

export default App;
