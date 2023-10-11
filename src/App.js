import logo from './logo.svg';
import './App.css';
import Routing from './Router/Routing';
import Add from './components/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <ToastContainer/>
    <Routing/>
    {/* <Add/> */}
   </>
  );
}

export default App;
