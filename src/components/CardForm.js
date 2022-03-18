import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function CardForm(props) {
    const navigate = useNavigate()
    //gör om denna till ett state istället
    //på så vis kommer ui't uppdateras automatiskt när ändringar sker

    const [card, setCard] = useState({
        cardnumber: null,
        name: '',
        valid: '',
        ccv: '',
        vendor: ''
    })


    function navigates() {
        
        props.updateCards(card)
        //navigate("/")

    }

    return (
        <section>
        <article id="cardid">
            <p>{card.cardnumber}</p>
            <p>{card.name}</p>
            <p>{card.valid}</p>
            <p>{card.vendor}</p>
            <p>{card.ccv}</p>
        </article>
        <article>
            <div id="number">
                <p>CARD NUMBER</p>
                <input type="text" id="numberinput" onChange={(e) => setCard({...card, cardnumber: e.target.value})}></input>
            </div>
            <div id="name">
                <p>CARDHOLDER NAME</p>
                <input type="text" id="nameinput" onChange={(e) => setCard({...card, name: e.target.value})}></input>
            </div>
            <div id="validccv">
                <div id="valid">
                    <p>VALID THRU</p>
                    <input type="text" id="validinput" onChange={(e) => setCard({...card, valid: e.target.value})}></input>
                </div>
                <div id="ccv">
                    <p>CCV</p>
                    <input type="text" id="ccvinput" onChange={(e) => setCard({...card, ccv: e.target.value})}></input>
                </div>
            </div>
            <div id="vendor">
                <p>VENDOR</p>
                <select id="vendorinput" onChange={(e) => setCard({...card, vendor: e.target.value})}>
                    <option value=""></option>
                    <option value="BITCOIN INK" id="bitcoin">BITCOIN INK</option>
                    <option value="NINJA BANK" id="ninja">NINJA BANK</option>
                    <option value="BLOCK CHAIN INK" id="block">BLOCK CHAIN INK</option>
                    <option value="EVIL CORP" id="evil">EVIL CORP</option>
                </select>
            </div>
            <button onClick={navigates}>ADD CARD</button>

            <br></br>
        </article>
        </section>
    );

}

export default CardForm