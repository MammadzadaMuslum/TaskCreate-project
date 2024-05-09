import { createContext, useState } from "react";
import axios from "axios";
const TaskContext = createContext();

function Provider({ children }) {
  const [creatTask, setCreatTask] = useState([]);
  const createTask = async (tittle, text) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      tittle,
      text,
    });
    const created = [...creatTask, response.data];
    setCreatTask(created);
  };
  const deletedTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const deleted = creatTask.filter((task) => {
      return task.id !== id;
    });
    setCreatTask(deleted);
  };
  const updatedTask = async (id, updateTittle, updateText) => {
    const responseUpdate = await axios.put(
      `http://localhost:3000/tasks/${id}`,
      {
        tittle: updateTittle,
        text: updateText,
      }
    );
    const update = creatTask.map((task) => {
      if (task.id == id) {
        return responseUpdate.data;
      }
      return task;
    });
    setCreatTask(update);
  };
  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:3000/tasks");
    setCreatTask(res.data);
  };
  const dataBasket = {
    createTask,
    deletedTask,
    updatedTask,
    fetchTasks,
    creatTask,
  };

  return (
    <TaskContext.Provider value={dataBasket}>{children}</TaskContext.Provider>
  );
}
export { Provider };
export default TaskContext;
