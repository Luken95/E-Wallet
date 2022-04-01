import { useEffect } from 'react';
import Top from '../components/Top';
import CardForm from '../components/CardForm';
import { useNavigate } from 'react-router-dom';


function AddCard(props) {
        console.log(props);
        const navigate = useNavigate();
        function updateCardsArray(newCard) {
                let cards = props.cards;
                props.setCard([...cards, newCard]);
                navigate('/');
        }
        //useEffect kan ta två argument. Första är funktionen som skall köras
        //andra är vilken ändring den skall lyssna på, i detta fall cards
        useEffect(() => {
                console.log(props.cards);
        }, [props.cards])

        return (
                <div>
                        <Top title="ADD A NEW BANK CARD" />
                        <p>ADD NEW CARD</p>
                        <CardForm updateCards={updateCardsArray} />
                </div>

        );
}

export default AddCard