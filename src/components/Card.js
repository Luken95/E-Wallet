import { useEffect, useRef } from 'react';
import chipDark from '../svgs/chip-dark.svg';

function Card({ card, setActiveCard }) {
console.log(card);
   const cardBG = useRef(null);
   useEffect(() => {
      if (card.vendor === "NINJA BANK") {
         cardBG.current.className = "Ninja"
      } else if (card.vendor === "BLOCK CHAIN INK") {
         cardBG.current.className = "Blockchain"
      } else if (card.vendor === "BITCOIN INK") {
         cardBG.current.className = "Bitcoin"
      } else if (card.vendor === "EVIL CORP") {
         cardBG.current.className = "Evil"
      }
   }, [card])

   return (
      <article id="cardid" ref={cardBG} className='homecolor' onClick={() => setActiveCard(card)}>
         <input className="chipDark" type="image" src={chipDark} alt="add" />
         <p className='numberPlacement'>{card.cardNumber.length > 0 ? card.cardNumber : "XXXX XXXX XXXX XXXX"}</p>
         <p className='holdernamePlacement'>CARDHOLDER NAME</p>
         <p className='holderPlacement'>{card.cardHolder.length > 0 ? card.cardHolder : "FIRSTNAME LASTNAME"}</p>
         <p className='validthruPlacement'>VALID THRU</p>
         <p className='validPlacement'>{card.validThru.length > 0 ? card.validThru : "MM/YY"}</p>
         <p className='vendorPlacement'>{card.vendor.length > 0 ? card.vendor : ""}</p>
      </article>
   );
}

export default Card