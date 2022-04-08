import chipDark from '../svgs/chip-dark.svg';

function Card({card}) {


   return (
      <article id="cardid" className='homecolor'>
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