import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/view/Home';
import AddCard from '../src/view/AddCard';
import { useState } from 'react';

function App() {
  //state över alla kort som vi har
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  return (
    <div className="App">
    
          <Router>
            <Routes>
              <Route path="/" element={<Home cards={cards} setActiveCard={setActiveCard} activeCard={activeCard} />} />
              <Route path="/addCard" element={<AddCard cards={cards} setActiveCard={setActiveCard} setCard={setCards} />} />
            </Routes>
          </Router>
  
    </div>
  );
}

export default App;
