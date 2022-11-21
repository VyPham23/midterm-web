import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import { Navbar } from './components';
import { Home } from './pages';


function App() {
  return (
    <Router className="App">
      <Navbar />
      <Home/>
      {/* <Detail /> */}
    </Router>
  );
}

export default App;
