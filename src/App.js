import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Feedbacks from './components/Feedback/Feedbacks';
import DownloadTasks from './components/DownloadTask/DownloadTasks';
import CreateTask from './components/Taskcreate/CreateTask';
import NotFound from './components/PageNotFound/NotFound';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import ViewTasks from './components/ViewTasks/ViewTasks';
import Login from './components/Login/Login';

const Layout = () => (
  <div>
    <Header />
    <Sidebar />
    <div className="main-content">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/view-tasks" element={<ViewTasks />} />
        <Route path="/download-tasks" element={<DownloadTasks />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </div>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
