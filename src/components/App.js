import React , {useState, useRef} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const tasksCopy = useRef([...tasks]);

  function remove(id){
    const updatedTasks = tasks.filter(a => a.id !== id);
    tasksCopy.current = tasksCopy.current.filter(a => a.id !== id);
    setTasks(updatedTasks);
  }

  function add(e, name, category){
    e.preventDefault();
    const newItem = {
      text: name,
      category: category,
      id: Date.now()
    }
    const updatedTasks = [...tasks, newItem];
    tasksCopy.current.push(newItem);
    setTasks(updatedTasks);
  }

  function setFilter(choice){
    // let updatedTasks = [];
    choice === "All" ? setTasks([...tasksCopy.current]) : setTasks(tasksCopy.current.filter(a => a.category === choice));
    // setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setFilter={setFilter}/>
      <NewTaskForm add={add} categories={CATEGORIES}/>
      <TaskList tasks={tasks} remove={remove}/>
    </div>
  );
}

export default App;
