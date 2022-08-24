import {useState} from "react";

function NewTaskForm({add, categories}) {
  const [newTask, setNewTask] = useState({name:"", category:"Misc"})
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={newTask.name} onChange={e => setNewTask({name:e.target.value, category:newTask.category})}/>
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={e => setNewTask({name:newTask.name, category:e.target.value})}>
          {categories.map(a => <option key={a}>{a}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={e => {add(e, newTask.name, newTask.category); setNewTask({name: "", category: newTask.category})}}/>
    </form>
  );
}

export default NewTaskForm;
