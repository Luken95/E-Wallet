// import chipLight from '../svgs/chip-light.svg';
// import Bitcoin from '../svgs/vendor-bitcoin.svg';
// import Blockchain from '../svgs/vendor-blockchain.svg';
// import Evil from '../svgs/vendor-evil.svg';
// import Ninja from '../svgs/vendor-ninja.svg';

function Card({card}) {
   console.log(card);
   return (
      <article>
         <p>{card.cardNumber}</p>
         <p>{card.cardHolder}</p>
         <p>{card.validThru}</p>
         <p>{card.ccv}</p>
         <p>{card.vendor}</p>
      </article>

   );
}

export default Card