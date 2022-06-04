import './App.css';
//Routes
import Home from './Routes/Home/Home'
import News from './Routes/News/News'
import Gallery from './Routes/Gallery/Gallery'
//Routing
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
