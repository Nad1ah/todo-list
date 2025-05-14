/*import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { API_URL } from "./config";

// eslint-disable-next-line no-unused-vars
async function fetchTasks() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (text) => {
    const response = await axios.post("http://localhost:5000/tasks", { text });
    setTasks([...tasks, response.data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;*/

import React from "react";
import { API_URL } from "./config"; // Verifique se o caminho está correto
const App = () => {
  // Seu código aqui
  return (
    <div>
      <h1>Minha Todo List</h1>
      {/* Outros componentes ou lógica */}
    </div>
  );
};
export default App;
