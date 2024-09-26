import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTask, deleteTask, undoTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks</p>
      ) : (
        tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            undoTask={undoTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;