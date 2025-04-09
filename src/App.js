import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import DownloadTasks from './components/DownloadTask/DownloadTasks';
import Feedbacks from './components/Feedback/Feedbacks';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import CreateTask from './components/Taskcreate/CreateTask';
import ViewTasks from './components/ViewTasks/ViewTasks';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <Login /> */}
      {/* <Dashboard /> */}
      {/* <CreateTask /> */}
      {/* <ViewTasks /> */}
      {/* <DownloadTasks /> */}
      <Feedbacks />
    </>
  );
}

export default App;
