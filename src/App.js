import React, { useState } from 'react';
import './App.css';
import TodoList from './components/to-do-list/TodoList';
import AddTask from './components/to-do-list/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { task: newTask, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const undoTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = false;
    setTasks(newTasks);
  };

  const filteredTasks = (filter) => {
    if (filter === 'pending') return tasks.filter(task => !task.completed);
    if (filter === 'completed') return tasks.filter(task => task.completed);
    return tasks; 
  };

  const [currentTab, setCurrentTab] = useState('all'); 

  return (
    <div className="App">
      <div className="todo-container">
        <h2>ToDo List</h2>

        <div className="tabs">
          <button
            className={currentTab === 'all' ? 'active' : ''}
            onClick={() => setCurrentTab('all')}
          >
            All
          </button>
          <button
            className={currentTab === 'pending' ? 'active' : ''}
            onClick={() => setCurrentTab('pending')}
          >
            Pending
          </button>
          <button
            className={currentTab === 'completed' ? 'active' : ''}
            onClick={() => setCurrentTab('completed')}
          >
            Completed
          </button>
        </div>

        <TodoList
          tasks={filteredTasks(currentTab)}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          undoTask={undoTask}
        />
        <AddTask addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
