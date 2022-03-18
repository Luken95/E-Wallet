import{ Route, useNavigate } from 'react-router-dom'

function CardForm (props){
const navigate = useNavigate()

function navigates(){
props.updateCards(cardform)
navigate("/")

}

console.log(props)
let cardform = {
    cardnumber: '',
    name: '',
    valid: '',
    ccv: '',
    vendor: ''
};

    return(
    <article>
        <div id="number">
        <p>CARD NUMBER</p>
        <input type="text" id="numberinput" onChange={(e) => (CardForm.number = e.target.value)}></input>
        </div>
        <div id="name">
        <p>CARDHOLDER NAME</p>
        <input type="text" id="nameinput" onChange={(e) => (CardForm.name = e.target.value)}></input>
        </div>
        <div id="validccv">
        <div id="valid">
        <p>VALID THRU</p>
        <input type="text" id="validinput" onChange={(e) => (CardForm.valid = e.target.value)}></input>
        </div>
        <div id="ccv">
        <p>CCV</p>
        <input type="text" id="ccvinput" onChange={(e) => (CardForm.ccv = e.target.value)}></input>
        </div>
        </div>
        <div id="vendor">
        <p>VENDOR</p>
        <select id="vendorinput" onChange={(e) => (CardForm.vendor = e.target.value)}>
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
    );
    
    }
    
    export default CardForm