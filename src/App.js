import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/view/Home';  
import AddCard from '../src/view/AddCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Router>
          {/*här lägger vi top.js sen tror jag*/}
          <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/AddCard" element={<AddCard/>}/>
          </Routes>
        </Router>
        </div>

      </header>
    </div>
  );
}

export default App;
