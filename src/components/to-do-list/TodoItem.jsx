import React from 'react';

function TodoItem({ task, index, toggleTask, deleteTask, undoTask }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <label>
        {/* Checkbox for complete/incomplete */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(index)}
        />
        {task.task}
      </label>

      {/* Undo and Delete buttons */}
      <div className="task-buttons">
        {task.completed && (
          <button className="undo-button" onClick={() => undoTask(index)}>
            Undo
          </button>
        )}
        <button className="delete-button" onClick={() => deleteTask(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;