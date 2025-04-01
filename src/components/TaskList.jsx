import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import SearchBar from './SearchBar';
import AddTask from './AddTask';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          Your <span className="text-accent-blue">Tasks</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-3">
          <SearchBar />
        </div>
        <div className="md:col-span-1">
          <TaskFilter />
        </div>
      </div>

      <AddTask />

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {tasks.length === 0 ? (
          <div className="p-8 text-center text-gray-600 dark:text-gray-400">
            No tasks found. Add a new task to get started!
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;