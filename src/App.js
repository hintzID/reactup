import './App.css';

import TabelSiswa from "./components/classes/TabelSiswa.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/classes/html_components/pages/About';




function App() {
  return (
    <Router>
    <div>
  
      <Routes>
          <Route path="/" element={<TabelSiswa />} />
          <Route path="/json" element={<About />} />
      </Routes>

    </div>
    </Router>
  );
}


export default App;
