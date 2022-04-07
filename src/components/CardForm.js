import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import chipLight from '../svgs/chip-light.svg';
import chipDark from '../svgs/chip-dark.svg';
import Bitcoin from '../svgs/vendor-bitcoin.svg';
import Ninja from '../svgs/vendor-ninja.svg';
import Blockchain from '../svgs/vendor-blockchain.svg';
import Evil from '../svgs/vendor-evil.svg';


function CardForm(props) {
    const navigate = useNavigate();
    const vendorImg = useRef(null);
    const cardColor = useRef(null);
/*  const  cssClass = useState(); */

    const [card, setCard] = useState({
        cardNumber: '',
        cardHolder: '',
        validThru: '',
        ccv: '',
        vendor: ''
    })

    function navigates() {
        props.updateCards(card)
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setCard(prevCard => {
            return {
                ...prevCard,
                [name]: value
            }
        })
    }
    useEffect(() => {
        if(card.vendor === "NINJA BANK"){
            vendorImg.current.src = Ninja
        }else if (card.vendor === "BLOCK CHAIN INK"){
            vendorImg.current.src = Blockchain
        }else if (card.vendor === "BITCOIN INK"){
            vendorImg.current.src = Bitcoin
        }else if (card.vendor === "EVIL CORP"){
            vendorImg.current.src = Evil
        }
    }, [card])

    useEffect(() => {
        if(card.vendor === "NINJA BANK"){
            cardColor.current.className = "Ninja"
        }else if (card.vendor === "BLOCK CHAIN INK"){
            cardColor.current.className = "Blockchain"
        }else if (card.vendor === "BITCOIN INK"){
            cardColor.current.className = "Bitcoin"
        }else if (card.vendor === "EVIL CORP"){
            cardColor.current.className = "Evil"
        }
    }, [card])

    return (
        <section>
        <article id="cardid" ref={ cardColor } className="emptycard">
            <input className="chipDark" type="image" src={ chipDark } alt="add"/>
            <input className="BitcoinPlacement" ref={vendorImg} type="image" src={ Bitcoin } alt="add"/>
            <p className='numberPlacement'>{card.cardNumber.length > 0? card.cardNumber : "XXXX XXXX XXXX XXXX" }</p>
            <p className='holdernamePlacement'>CARDHOLDER NAME</p>
            <p className='holderPlacement'>{card.cardHolder.length > 0? card.cardHolder : "FIRSTNAME LASTNAME"}</p>
            <p className='validthruPlacement'>VALID THRU</p>
            <p className='validPlacement'>{card.validThru.length > 0? card.validThru : "MM/YY"}</p>
            <p className='vendorPlacement'>{card.vendor.length > 0? card.vendor : ""}</p>
        </article>

        <section>
            <div id="number">
                <p>CARD NUMBER</p>
                <input type="text" id="numberinput" onChange={(e) => setCard({...card, cardNumber: e.target.value})}></input>
            </div>
            <div id="name">
                <p>CARDHOLDER NAME</p>
                <input type="text" id="nameinput" onChange={(e) => setCard({...card, cardHolder: e.target.value})}></input>
            </div>
            <div id="validccv">
                <div id="valid">
                    <p>VALID THRU</p>
                    <input type="text" id="validinput" onChange={(e) => setCard({...card, validThru: e.target.value})}></input>
                </div>
                <div id="ccv">
                    <p>CCV</p>
                    <input type="text" id="ccvinput" onChange={(e) => setCard({...card, ccv: e.target.value})}></input>
                </div>
            </div>
            <div id="vendor">
                <p>VENDOR</p>
                <select id="vendorinput" onChange={(e) => setCard({...card, vendor: e.target.value})}>
                    <option value="" hidden></option>
                    <option className='Bitcoinink' value="BITCOIN INK" id="bitcoin">BITCOIN INK</option>
                    <option className='Ninja' value="NINJA BANK" id="ninja">NINJA BANK</option>
                    <option className='Blockchain' value="BLOCK CHAIN INK" id="block">BLOCK CHAIN INK</option>
                    <option className='Evil' value="EVIL CORP" id="evil">EVIL CORP</option>
                </select>
            </div>
            <button className="button" onClick={navigates}>ADD CARD</button>

            <br></br>
        </section>
        </section>
    );

}

export default CardForm