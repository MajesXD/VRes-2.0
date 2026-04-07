import './styles/App.css'
import { useEffect, useState } from "react";
import {colors} from "./assets/colors";
import ArrowLeft from './assets/ArrowLeft';
import ArrowRight from './assets/ArrowRight';
import Callendar from './assets/Callendar';
import Web from './assets/Web';
import Phone from './assets/Phone';
import WalkIn from './assets/WalkIn';
import PersonalID from './assets/PersonalID';
import Person from './assets/Person';
import Clock from './assets/Clock';
import Hourglass from './assets/Hourglass';
import Plus from './assets/Plus';
import Transfer from './assets/Transfer';
import Card from './assets/Card';
import KmMb from './assets/KmMb';
import Cash from './assets/Cash';
import Voucher from './assets/Voucher';
import Reservation from './Reservation';
import Week from './Week';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function App() {

  const [currentDate, setCurrentDate] = useState(new Date());

  function previousDate() {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  }

  function nextDate() {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate); 
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reservations/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReservations(data);
      });
  }, []);

  return (
    <app>
      <panel>
        <section className='date_section'>
          <ArrowLeft className='clickable' onClick={previousDate}/>
          <input className='calendar' type='date'
          value={currentDate.toISOString().split("T")[0]}
          onChange={(e) => {setCurrentDate(new Date(e.target.value));}}>

          </input>
          <ArrowRight className='clickable' onClick={nextDate}/>
        </section>
        <form className='add_reservation_section'>
          <div className='add_reservation-row'>
            <Web className={"clickable icon_choose"}/>
            <Phone className={"clickable icon_choose"}/>
            <WalkIn className={"clickable icon_choose"}/>
          </div>
          <div className='add_reservation-row'>
            <Callendar color={colors.blue}/><input type="text" />
            </div>
          <div className='add_reservation-row'>
            <PersonalID color={colors.blue}/><input type="text" />
            </div>
          <div className='add_reservation-row'>
            <Person color={colors.blue}/><input type="text" />
            </div>
          <div className='add_reservation-row'>
            <Clock color={colors.blue}/><input type="text" />
            </div>
          <div className='add_reservation-row'>
            <Hourglass color={colors.blue}/><input type="text" />
            </div>
          <div className='add_reservation-row clickable'>
            <Plus/>
            <p style={{color: 'white', fontSize: '1vw'}}>Dodaj rezerwację</p>
            </div>

        </form>

        <section className='income_section'>


          <div className='income_row cantselect'>
            <p>Obrót dnia:</p>
            </div>

          <div className='income_row'>
            <div className='income_row_part'><Transfer color={colors.blue}/></div>
            <div className='income_row_part'><p className='income_quantity'>512</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><Card color={colors.blue}/></div>
            <div className='income_row_part'><p className='income_quantity'>138</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><Cash color={colors.blue} /></div>
            <div className='income_row_part'><p className='income_quantity'>100</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><KmMb className='kmmb' color={colors.blue}/></div>
            <div className='income_row_part'><p className='income_quantity'>100,33</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><Voucher color={colors.blue}/></div>
            <div className='income_row_part'><p className='income_quantity'>2</p></div>
            <div className='income_row_part'><p>x</p></div>
          </div>
          <div className='income_row income_row_line'></div>
          <div className='income_row'>
            <div className='income_row_part'><p>Razem:</p></div>
            <div className='income_row_part'><p className='income_quantity'>2</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>
          <div style={{marginTop: '0', height: '20px'}} className='income_row'>
            <div className='income_row_part'></div>
            <div className='income_row_part'><p className='income_quantity'>2</p></div>
            <div className='income_row_part'><p>x</p></div>
          </div>
        </section>
      </panel>

        <main>
          <Week currentDate={currentDate}/>
          <Reservation people={1} time={100}/>
        </main>
    </app>
  )
}

export default App
