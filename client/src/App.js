import './App.css';
import AddBook from './components/AddBook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <h1 className="text-3xl mt-5  text-cyan-900 font-bold underline">
      Hello world!
    </h1>
   <AddBook/>
    </div>
)
}
export default App;
