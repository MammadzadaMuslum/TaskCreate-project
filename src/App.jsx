import React, { useState } from "react";
import Task from "./Task";
import TaskList from "./TaskList";

function App() {
  const [creatTask, setCreatTask] = useState([]);
  const createTask = (tittle, text) => {
    const created = [
      ...creatTask,
      {
        id: Math.floor(Math.random() * 999999),
        tittle,
        text,
      },
    ];
    setCreatTask(created);
  };
  const deletedTask = (id) => {
    const deleted = creatTask.filter((task) => {
      return task.id !== id;
    });
    setCreatTask(deleted);
  };
  const updatedTask = (id, updateTittle, updateText) => {
    const update = creatTask.map((task) => {
      if (task.id == id) {
        return { id, tittle: updateTittle, text: updateText };
      }
      return task;
    });
    setCreatTask(update);
  };
  return (
    <div>
      <Task onChange={createTask} />
      <h2>Tasklar</h2>
      <TaskList
        creatTask={creatTask}
        onDelete={deletedTask}
        onUpdate={updatedTask}
      />
    </div>
  );
}

export default App;
