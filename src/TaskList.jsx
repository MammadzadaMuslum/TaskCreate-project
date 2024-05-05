import React from "react";
import "./Style/List.css";
import TaskShow from "./TaskShow";

function TaskList({ creatTask, onDelete, onUpdate }) {
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
