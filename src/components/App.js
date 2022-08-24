import React , {useState, useEffect} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS);

  useEffect(() => {
    let newId = Date.now();
    const updatedTasks = [...tasks];
    updatedTasks.map(a => {a.id = a.id || newId++})
    setTasks(updatedTasks);
    console.log(tasks);
}, [])

  function remove(id){
    const updatedTasks = tasks.filter(a => a.id !== id);
    setTasks(updatedTasks);
  }

  function add(name, category){
    const updatedTasks = [...tasks]
    updatedTasks.push({
      id: Date.now(),
      name: name,
      category: category
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm add={add} categories={CATEGORIES}/>
      <TaskList tasks={tasks} remove={remove}/>
    </div>
  );
}

export default App;
