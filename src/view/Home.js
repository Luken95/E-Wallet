import { Link } from 'react-router-dom'
import Top from '../components/Top';
import Card from '../components/Card';
import CardStack from '../components/CardStack';


function Home(props) {
    const { cards } = props;
    console.log(props.cards);

    return (
        <div>
            <Top title="E-WALLET" />
            <h6>ACTIVE</h6>
            {
                props.cards.map((card, index) => (
                    <Card card={card} key={index} />
                ))
            }
          <div className='Cardstacks'> 
      <CardStack cards= {cards}/> 
      </div>  


      <div>
        <Link to="/addcard"> <button className="button" type="button">ADD A NEW CARD</button></Link>
        </div>  
        </div>


    );



}

export default Home