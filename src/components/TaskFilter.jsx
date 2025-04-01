import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskFilter = () => {
  const { filter, setFilter } = useContext(TaskContext);

  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue dark:bg-gray-700 dark:text-white"
    >
      <option value="all">All Tasks</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default TaskFilter;