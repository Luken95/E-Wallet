import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';


function AddCard(props) {
        const navigate = useNavigate()
        const [cards, setCards] = useState([]);

        function updateCardsArray(newCard) {
                setCards([...cards, newCard]);
        }
        //useEffect kan ta två argument. Första är funktionen som skall köras
        //andra är vilken ändring den skall lyssna på, i detta fall cards
        useEffect(() => {
                console.log(cards);
        }, [cards])

        return (
                <div>
                        <Top title="ADD A NEW BANK CARD" />
                        <p>ADD NEW CARD</p>
                        {/* //<Card card={cards} /> */}
                                <CardForm updateCards={updateCardsArray} />
                                {cards.map((card, index) => (
                                        <Card data={card} key={index} />

                                ))}
                </div>

        );
}

export default AddCard