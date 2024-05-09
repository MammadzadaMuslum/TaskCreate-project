import React, { useContext } from "react";
import "./Style/List.css";
import TaskShow from "./TaskShow";
import TaskContext from "./Context/auth-context";

function TaskList({ onDelete, onUpdate }) {
  const { creatTask } = useContext(TaskContext);
  return (
    <div className="cards">
      {creatTask.map((show, index) => {
        return (
          <TaskShow
            key={index}
            show={show}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
