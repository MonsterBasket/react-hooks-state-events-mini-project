import Task from "./Task";

function TaskList({tasks, remove}) {

  return (
    <div className="tasks">
      {tasks.map(item => <Task key={item.id} id={item.id} text={item.text} category={item.category} remove={_ => remove(item.id)}/>)}
    </div>
  );
}

export default TaskList;
