import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chipLight from '../svgs/chip-light.svg';
import chipDark from '../svgs/chip-dark.svg';
import Bitcoin from '../svgs/vendor-bitcoin.svg';


function CardForm(props) {
    const navigate = useNavigate()
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

    return (
        <section>
        <article id="cardid">
            <input className="chipDark" type="image" src={ chipDark } alt="add"/>
            <input className="Bitcoin" type="image" src={ Bitcoin } alt="add"/>
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
                    <option value="BITCOIN INK" id="bitcoin">BITCOIN INK</option>
                    <option value="NINJA BANK" id="ninja">NINJA BANK</option>
                    <option value="BLOCK CHAIN INK" id="block">BLOCK CHAIN INK</option>
                    <option value="EVIL CORP" id="evil">EVIL CORP</option>
                </select>
            </div>
            <button className="button" onClick={navigates}>ADD CARD</button>

            <br></br>
        </section>
        </section>
    );

}

export default CardForm