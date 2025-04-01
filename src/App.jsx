import React from 'react';
import AuthProvider from './contexts/AuthContext';
import TaskProvider from './contexts/TaskContext';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main>
            <Auth>
              <TaskList />
            </Auth>
          </main>
        </div>
      </TaskProvider>
     </AuthProvider>
  );
};

export default App;