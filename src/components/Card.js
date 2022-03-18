// import chipLight from '../svgs/chip-light.svg';
// import Bitcoin from '../svgs/vendor-bitcoin.svg';
// import Blockchain from '../svgs/vendor-blockchain.svg';
// import Evil from '../svgs/vendor-evil.svg';
// import Ninja from '../svgs/vendor-ninja.svg';

function Card (props){
console.log(props.data);
    return(
    <article>
       <h2></h2>
       <article id="cardid">
          <p>{props.data.name}</p>
          <p>{props.data.vendor}</p>
       </article>
       {/*  <p>{props.data.name}</p> */}
    </article>
    
    );
    }
    
    export default Card