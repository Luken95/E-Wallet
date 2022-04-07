import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/view/Home';
import AddCard from '../src/view/AddCard';
import { useState } from 'react';

function App() {
  //state över alla kort som vi har
  const [cards, setCards] = useState([]);
  return (
    <div className="App">
    
          <Router>
            <Routes>
              <Route path="/" element={<Home cards={cards} />} />
              <Route path="/addCard" element={<AddCard cards={cards} setCard={setCards} />} />
            </Routes>
          </Router>
  
    </div>
  );
}

export default App;
