import React, { useState } from "react";

const TaskList = ({ tasks, handleChangeTask, handleDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Tasks
            task={task}
            onChange={handleChangeTask}
            onDelete={handleDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};

function Tasks({ task, onChange, onDelete }) {
  const [isEditiong, setIsEditing] = useState(false);
  let taskContent;
  if (isEditiong) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            text: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}

export default TaskList;
