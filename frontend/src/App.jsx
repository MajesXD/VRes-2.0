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
import KmMb from './assets/Mb';
import Cash from './assets/Cash';
import Voucher from './assets/Voucher';
import Reservation from './components/Reservations';

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
// import reservationPlacement from "./utility/reservationPlacement";
import GridCell from './components/GridCell';



function App() {
  // Wybieranie daty
  const [currentDate, setCurrentDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);

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
  // zestringowanie daty do łatwiejszego użycia w niektórych miejscach (szczególnie w API)
  let currentDayString = currentDate.toISOString().split("T")[0];

  // Pobranie rezerwacji z wybraną datą
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/reservations/?date=${currentDayString}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReservations(data);
      });
  }, [currentDate]);

  // Tworzenie tabeli - wybiera pierwszą i ostatnią godzinę w zależności od dnia
  function generateTimes(currentDate) {
      const times = [];
      const day = currentDate.getDay();
      let startHour;
      let endHour;

      if (day >= 1 && day <= 5) {
          startHour = 15;
          endHour = 21;
      } else if (day === 6) {
          startHour = 12;
          endHour = 21;
      } else if (day === 0) {
          startHour = 12;
          endHour = 19;
      }

  // Wybieranie pierwszej rezerwacji w dniu i zwrócenie jej godziny
    const firstReservation = reservations.filter(reservation => {
        const reservationHour = Number(reservation.time.split(":")[0]);
        return reservationHour < startHour;
    });

    if (firstReservation.length > 0) {
        startHour = Math.min(
            ...firstReservation.map(reservation =>
                Number(reservation.time.split(":")[0])
            )
        );
    }
    // Wybieranie ostatniej rezerwacji w dniu i zwrócenie jej godziny
    const lastReservation = reservations.filter(reservation => {
        const reservationHour = Number(reservation.time.split(":")[0]);
        const durationHour = Number(reservation.duration.split(":")[0]);

        return reservationHour + durationHour > endHour;
    });

    if (lastReservation.length > 0) {
        endHour = Math.max(
            ...lastReservation.map(reservation => {
                const reservationHour = Number(reservation.time.split(":")[0]);
                const durationHour = Number(reservation.duration.split(":")[0]);

                return reservationHour + durationHour;
            })
        );
    }
    // Tworzenie siatki co 15 minut do późniejszego drag and drop
    for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {

            if (hour === endHour && minute > 0) {
                break;
            }

            times.push(
                `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`
            );
        }
    }
    return {times, startHour, endHour};
  };

  // Tworzenie godzin
  function Week({currentDate}) {
      
      const hours = Array.from(
      { length: endHour - startHour + 1 },
      (_, i) => startHour + i
  );
      return (
        <>
          {hours.map(hour => (
            <div
            key={hour}
            className="table_hour"
            style={{ gridRow: (hour - startHour) * 4 + 1 }}>  
            <p>{String(hour % 24).padStart(2, "0")}:00</p>
            </div>
          ))}
        </>
      );
    
      return null;

  }

  const { times, startHour, endHour } = generateTimes(currentDate);

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
          {times.map((time, index) => (
            <GridCell
                key={time}
                time={time}
                row={index + 1}
            />
        ))}
          <Week currentDate={currentDate}/>
          {reservations.map((reservation) => (
            <Reservation
                key={reservation.id}
                client={reservation.client}
                amount={reservation.amount}
                date={reservation.date}
                time={reservation.time}
                duration={reservation.duration}
                note={reservation.note}
                startHour={startHour}
            />
        ))}
        </main>
    </app>
  )
}

export default App
