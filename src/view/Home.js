import { Link } from 'react-router-dom'
import Top from '../components/Top';
import Card from '../components/Card';
import CardStack from '../components/CardStack';


function Home(props) {
    console.log(props.cards);

    return (
        <div>
            <Top title="E-WALLET" />
            <p>active cards</p>
            {
                props.cards.map((card, index) => (
                    <Card card={card} key={index} />
                ))
            }
            {/* 
        <CardStack /> */}

            <Link to="/addcard"> <button type="button">ADD A NEW CARD</button></Link>

        </div>


    );



}

export default Home