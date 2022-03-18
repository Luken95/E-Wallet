import{ Link } from 'react-router-dom' 
import Top from '../components/Top';
import Card from '../components/Card';
import CardStack from '../components/CardStack';


function Home (){

    return(
    <div>
        <Top title="E-WALLET"/>
        <p>active cards</p>

         <Card/>

        <CardStack />
        
        <Link to="/addcard"> <button type="button">ADD A NEW CARD</button></Link>
          
    </div>
    
   
    );
    
    
    
    }
    
    export default Home