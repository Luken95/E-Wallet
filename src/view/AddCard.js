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
        useEffect(() => {
                console.log(props.cards);
        }, [props.cards])

        return (
                <div>
                        <Top title="ADD A NEW BANK CARD" />
                        <h6>NEW CARD</h6>
                        <CardForm updateCards={updateCardsArray} />
                </div>

        );
}

export default AddCard