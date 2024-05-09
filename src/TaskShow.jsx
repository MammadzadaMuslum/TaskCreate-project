import React, { useContext, useState } from "react";
import "./Style/Show.css";
import Task from "./Task";
import TaskContext from "./Context/auth-context";

function TaskShow({ show }) {
  const [taskEdit, setTaskEdit] = useState(false);
  const { deletedTask, updatedTask } = useContext(TaskContext);
  const handleDelete = () => {
    deletedTask(show.id);
  };
  const handleEdit = () => {
    setTaskEdit(!taskEdit);
  };
  const handleSubmit = (id, updateTittle, updateText) => {
    setTaskEdit(false);
    updatedTask(id, updateTittle, updateText);
  };
  return (
    <div>
      {taskEdit ? (
        <div className="card">
          <Task show={show} handleEdit={handleEdit} onUpdate={handleSubmit} />
        </div>
      ) : (
        <div className="card">
          <div className="texts">
            <h3>Taskiniz!</h3>
            <p>{show.tittle}</p>
            <h3>Etrafli:</h3>
            <p>{show.text}</p>
          </div>
          <div className="buttons">
            <button className="clear-btn" onClick={handleDelete}>
              Sil
            </button>
            <button className="edit-btn" onClick={handleEdit}>
              Duzelt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
