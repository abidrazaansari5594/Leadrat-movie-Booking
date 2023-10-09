
import './App.css';
import Main from './Components/Main';
import { useState } from "react"
import { TbArmchair } from "react-icons/tb"

function App() {
  const [ticketType, setTicketType] = useState('Standard');
  const [quanityOfTicker, setQuantityOfTicker] = useState('')

  const ticketTypeHandler = (event) => {
    setTicketType(event.target.value);
  }

  const quantityHandler = (event) => {
    setQuantityOfTicker(event.target.value)
  }

  return (
    <div className='main_container'>
      <div className='main_container_inner'>

      <div className="nav">
     <h2>Jawan</h2>
<p>Alankar Cinema: Nagpur | Today, 08 Oct, 09:30 PM</p>
      </div>

        <div className="App">
          <div className='left'>
            <div className='dropdown'>

              <label htmlFor="tickettype" >Ticket Type:</label>
              <select id="tickettype" value={ticketType} onChange={ticketTypeHandler}>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>

              <label htmlFor="qty" >Ticket Quantity:</label>
              <select id="qty" value={quanityOfTicker} onChange={quantityHandler}>
                <option value="">Qnty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>

              </select>
            </div>
            <Main type={ticketType} quanityOfTicker={quanityOfTicker} />

          </div>
          <div className='right'>
            <div>
              <h3>Key to Seat Layout:</h3>
              <ul>
                <li>
                  <TbArmchair className='available seat' style={{width:"35px",height:"35px"}} />
                  <p>Available</p></li>

                <li>
                  <TbArmchair className='unavailable size' />
                  <p>Unavailable</p></li>

                <li>
                  <TbArmchair className='yourselection size' />
                  <p>Your Selection</p></li>

                  <li>
                  <TbArmchair className='premiumcolor size ' />
                  <p>Premium</p></li>

              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
