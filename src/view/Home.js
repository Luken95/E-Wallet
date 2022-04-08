import { Link } from 'react-router-dom'
import Top from '../components/Top';
import Card from '../components/Card';
import CardStack from '../components/CardStack';


function Home(props) {
    const { cards, activeCard, setActiveCard } = props;
    console.log(props.cards);
    console.log(activeCard);
    return (
        <div>
            <Top title="E-WALLET" />
            <h6>ACTIVE</h6>
            {activeCard ? <Card card={activeCard} /> : null}

            <div className='Cardstacks'>
                <CardStack setActiveCard={setActiveCard} cards={cards} />
            </div>
            <div>
                <Link to="/addcard"> <button className="button" type="button">ADD A NEW CARD</button></Link>
            </div>
        </div>


    );



}

export default Home