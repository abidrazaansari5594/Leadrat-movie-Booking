
import './App.css';
import Main from './Components/Main';
import { useState } from "react"
import { TbArmchair } from "react-icons/tb"
import { BsPencil } from "react-icons/bs"
import {RxCross2} from "react-icons/rx"



function App() {
  const [ticketType, setTicketType] = useState('Standard');
  const [quanityOfTicker, setQuantityOfTicker] = useState('')
  const [movieData,setMovieData] =useState(0)
  const arr=[{name:"Jawan",thether:"Alankar Cinema: Nagpur | Today, 08 Oct, 09:30 PM"},
  {name:"Gadder 2",thether:"Woodland Cinema: Virar (W) | Today, 07 Oct, 08:30 PM"},
  {name:"OMG 2",thether:"Roxy Cinema: Charni Road | tomorrow, 08 Oct, 09:30 PM"},
  {name:"Coat",thether:"Plaza Cinema: Dadar | Today, 08 Oct, 09:30 PM"},
  {name:"Neeyat",thether:"Maratha Cinema: Mumbai | Today, 05 Oct, 07:30 PM"},
 ]

  const ticketTypeHandler = (event) => {
    setTicketType(event.target.value);
  }

  const quantityHandler = (event) => {
    setQuantityOfTicker(event.target.value)
  }

  const movieChangeHandler=()=>{
    if(movieData===4){
      setMovieData(0)
    }else{
      setMovieData(movieData+1)
    }
  }
  return (
    <div className='main_container'>
      <div className='main_container_inner'>

        <div className='nav-container'>
          <div className="nav">
            <h2>{arr[movieData].name}</h2>
            <p style={{fontSize:"13px"}}>{arr[movieData].thether}</p>
          </div>
          <div className="ticketscount">
            <p className="ticket-number">{quanityOfTicker}</p>
            <p className="ticket-label">{quanityOfTicker==='' ? "tickets" : quanityOfTicker<=1 ? "ticket" : "tickets"}</p>
            <div className="icon">
              <BsPencil />
            </div>
          </div>
          <RxCross2 onClick={movieChangeHandler} className='cross'/>
        </div>

        <div className="App">
          <div className='left'>
            <div className='dropdown'>

              <label htmlFor="tickettype" style={{fontSize:"13px"}} >Ticket Type:</label>
              <select id="tickettype" value={ticketType} onChange={ticketTypeHandler}>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>

              <label htmlFor="qty" style={{fontSize:"13px"}}>Ticket Quantity:</label>
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
                  <TbArmchair className='available seat' style={{ width: "35px", height: "35px" }} />
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
