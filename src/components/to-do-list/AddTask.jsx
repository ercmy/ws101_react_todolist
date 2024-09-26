import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask(''); 
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default AddTask;