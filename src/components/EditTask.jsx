import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { format } from 'date-fns';

const EditTask = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');
  const { editTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      editTask(task.id, { title, description, dueDate });
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue dark:bg-gray-700 dark:text-white"
          required
          autoFocus
        />
      </div>
      <div className="mb-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue dark:bg-gray-700 dark:text-white"
          rows="3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate ? format(new Date(dueDate), 'yyyy-MM-dd') : ''}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-accent-blue text-white rounded-md hover:bg-blue-600 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditTask;