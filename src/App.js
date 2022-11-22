import {
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";
import './App.css';
import { Navbar } from './components';
import { Home } from './pages';
import { Detail } from './pages'

function App() {

  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;
