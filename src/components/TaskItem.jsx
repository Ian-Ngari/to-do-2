import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import EditTask from './EditTask';
import { format } from 'date-fns';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleComplete } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
      {isEditing ? (
        <EditTask task={task} onClose={() => setIsEditing(false)} />
      ) : (
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <button
              onClick={() => toggleComplete(task.id)}
              className={`mt-1 flex-shrink-0 h-5 w-5 rounded border ${task.completed ? 'bg-accent-blue border-accent-blue' : 'border-gray-300 dark:border-gray-600'}`}
              aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {task.completed && (
                <svg className="h-3 w-3 text-white mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <div>
              <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500 dark:text-gray-500' : 'text-gray-800 dark:text-gray-200'}`}>
                {task.title}
              </h3>
              {task.description && (
                <p className={`text-sm mt-1 ${task.completed ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-400'}`}>
                  {task.description}
                </p>
              )}
              {task.dueDate && (
                <p className={`text-xs mt-2 ${task.completed ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'}`}>
                  Due: {format(new Date(task.dueDate), 'MMM dd, yyyy')}
                </p>
              )}
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-gray-500 dark:text-gray-400 hover:text-accent-blue transition"
              aria-label="Edit task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
              aria-label="Delete task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;