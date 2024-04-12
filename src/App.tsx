import './app.css'
import { FaRegMoon, FaMoon } from "react-icons/fa";
import AppRoutes from './assets/pages/appRoutes';

function App() {

  return (
    <div className="App">
      <div className='header'>
        <h1>Where in the world?</h1>
        <button className='dark-mode-btn'> <FaMoon className='moon-fill' width={40} height={40} /> <FaRegMoon width={40} height={40} />Dark Mode</button>
      </div>
      <AppRoutes />

    </div>
  );
}

export default App;
