import { useState } from 'react';
import{ Route, useNavigate } from 'react-router-dom'
import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';


function AddCard (props){
const navigate = useNavigate()
const [cards, setCards] = useState ([

]);

function updateCardsArray(newCard){
setCards(cards => [...cards, newCard]);
console.log(newCard)
console.log(cards)

}

return(
<div>
<Top title="ADD A NEW BANK CARD"/>
<p>ADD NEW CARD</p>
<Card card={cards} />
<form>
<CardForm updateCards ={updateCardsArray}/>
        {cards.map((card, index) => (
         <Card data={card} key={index}/>

        ))}
</form>
</div>

);}

export default AddCard