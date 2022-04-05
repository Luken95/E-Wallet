import chipLight from '../svgs/chip-light.svg';
import chipDark from '../svgs/chip-dark.svg';
import Bitcoin from '../svgs/vendor-bitcoin.svg';
import Blockchain from '../svgs/vendor-blockchain.svg';
import Evil from '../svgs/vendor-evil.svg';
import Ninja from '../svgs/vendor-ninja.svg';

function Card({card}) {
/*    const { setCard } = props;
   var cardLogo, cardClass;


   if (card.company === "bitcoin"){
       cardLogo = Bitcoin
       cardClass += "bitcoin"

   } else if(card.company === "blockchain"){
       cardLogo = Blockchain
       cardClass += " blockchain"

   } else if(card.company === "ninja") {
       cardLogo = Ninja
       cardClass += " ninja"

   } else if(card.company === "evilcorp"){
       cardLogo = Evil
       cardClass += " evilcorp"

   } else if(card.company === ""){
       cardLogo = Bitcoin

   } */



   return (
      <article id="cardid">
           <input className="chipDark" type="image" src={ chipDark } alt="add"/>
            <p className='numberPlacement'>{card.cardNumber.length > 0? card.cardNumber : "XXXX XXXX XXXX XXXX" }</p>
            <p className='holdernamePlacement'>CARDHOLDER NAME</p>
            <p className='holderPlacement'>{card.cardHolder.length > 0? card.cardHolder : "FIRSTNAME LASTNAME"}</p>
            <p className='validthruPlacement'>VALID THRU</p>
            <p className='validPlacement'>{card.validThru.length > 0? card.validThru : "MM/YY"}</p>
            <p className='vendorPlacement'>{card.vendor.length > 0? card.vendor : ""}</p>
      </article>
   );
}

export default Card