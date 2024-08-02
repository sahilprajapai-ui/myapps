import './App.css';
import Mynav from './nav';
import Myevents from "./events"
import Myngos from './NGOpage';
import {Route, Routes} from "react-router-dom"
import Myhome from './home';

function App() {
  return (
    <div className="App">
      <Mynav/>

      <Routes>
        <Route path='/' element={<Myhome />} />
        <Route path="/NGO's" element={<Myngos />} />
        <Route path="/Events" element={<Myevents />} />
      </Routes>
    
    </div>
  );
}

export default App;
