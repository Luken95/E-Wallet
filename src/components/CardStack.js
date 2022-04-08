import Card from './Card';

function CardStack (props){

    const { cards, setCard, setActiveCard} = props;

    const cardComponent = cards.map((card, index) =>{
        return <Card setActiveCard={setActiveCard} card={ card } key={ index }  setCard={ setCard } />
    })

    return(

    <section className="cardStack-component">
    <section className="cardStack-section">
    { cardComponent }
    </section>
    </section>
    );
    }
    export default CardStack