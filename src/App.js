import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import CreateTask from './components/Taskcreate/CreateTask';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <CreateTask />
    </>
  );
}

export default App;
