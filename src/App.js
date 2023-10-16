
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom';

function App() {

 

  return (
    <div className="App">
     <Navbar />
     <Outlet />
    </div>
  );
}

export default App;
