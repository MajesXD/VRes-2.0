import './styles/App.css'
import { useEffect, useState } from "react";
import {colors} from "./assets/colors";
import * as icons from './assets';
import Reservation from './components/Reservations';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
// import reservationPlacement from "./utility/reservationPlacement";
import GridCell from './components/GridCell';



function App() {
  // Wybieranie daty
  const [currentDate, setCurrentDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [newResDate, setNewResDate] = useState(currentDate);

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

  // Tworzenie siatki oddzielnie dla rezrwacji i godzin
    function HoursGrid({currentDate}) {
      
      const hours = Array.from(
      { length: endHour - startHour + 1 },
      (_, i) => startHour + i
  );
      return (
        <>
          {hours.map(hour => (
            <div
            key={hour}
            className="hourSeparator"
            style={{ gridRow: (hour - startHour) * 4 + 1 }}>  
            <p>{String(hour % 24).padStart(2, "0")}:00</p>
            </div>
          ))}
        </>
      );
    
      return null;
  }
  
    function ReservationsGrid({currentDate}) {
      
      const hours = Array.from(
      { length: endHour - startHour + 1 },
      (_, i) => startHour + i
  );
      return (
        <>
          {hours.map(hour => (
            <div
            key={hour}
            className="gridSeparator"
            style={{ gridRow: (hour - startHour) * 4 + 1 }}>  
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
          <icons.ArrowLeft className='clickable' onClick={previousDate}/>
          <input className='calendar' type='date'
          value={currentDate.toISOString().split("T")[0]}
          onChange={(e) => {setCurrentDate(new Date(e.target.value));}}>

          </input>
          <icons.ArrowRight className='clickable' onClick={nextDate}/>
        </section>
        <form className='add_reservation_section'>

          <div className='add_reservation-row'>
            <icons.Web className={"clickable icon_choose"}/>
            <icons.Phone className={"clickable icon_choose"}/>
            <icons.WalkIn className={"clickable icon_choose"}/>
          </div>

          <div className='add_reservation-row'>
            <icons.Calendar color={colors.blue}/>
            <input type="date" className='adding_dateInput'
            value={newResDate.toISOString().split("T")[0]}
            onChange={(e) => {setNewResDate(new Date(e.target.value));}}
            >
            </input>
            </div>

          <div className='add_reservation-row'>
            <icons.PersonalID color={colors.blue}/><input type="text" className='adding_nameInput'/>
            </div>

          <div className='add_reservation-row'>
            <icons.Person color={colors.blue}/><input type="number" className='adding_amount'
            defaultValue={1}
            min={0}/>
            </div>

          <div className='add_reservation-row'>
            <icons.Clock color={colors.blue}/>
              <input type='time' step={900}></input>
            </div>

          <div className='add_reservation-row'>
            <icons.Hourglass color={colors.blue}/>
              <select defaultValue='01'>
                <option value="00">0</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select>
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
            </div>
            
          <div className='add_reservation-row clickable'>
            <icons.Plus/>
            <p className=''>Dodaj rezerwację</p>
            </div>

        </form>

        <section className='income_section'>


          <div className='income_row cantselect'>
            <p>Obrót dnia:</p>
            </div>

          <div className='income_row'>
            <div className='income_row_part'><icons.Transfer color={colors.blue}/></div>
            <div className='income_row_part'><p className='income_quantity'>512</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><icons.Card color={colors.blue}/></div>
            <div className='income_row_part'><p className='income_quantity'>138</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><icons.Cash color={colors.blue} /></div>
            <div className='income_row_part'><p className='income_quantity'>100</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><icons.KmMb className='kmmb' color={colors.blue}/></div>
            <div className='income_row_part'><p className='income_quantity'>100,33</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><icons.Voucher color={colors.blue}/></div>
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
      <section className='mainWrapper'>
        <header>
          <div className='station'></div>
          <div className='station'><icons.Monitor className='iconsMonitor'/><p>1</p></div>
          <div className='station'><icons.Monitor className='iconsMonitor'/><p>2</p></div>
          <div className='station'><icons.Monitor className='iconsMonitor'/><p>3</p></div>
          <div className='station'><icons.Monitor className='iconsMonitor'/><p>4</p></div>
          <div className='station'><icons.Monitor className='iconsMonitor'/><p>5</p></div>
          <div className='station'><icons.Monitor className='iconsMonitor'/><p>6</p></div>
          <div className='station'><icons.Monitor className='iconsMonitor'/><p>7</p></div>
          <div className='station'><icons.Monitor className='iconsMonitor'/><p>8</p></div>


        </header>
        <main>
          <div className='hoursField'>
            <HoursGrid currentDate={currentDate}/>
            <ReservationsGrid currentDate={currentDate}/>
          </div>

          <div className='reservationsField'>
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
            <ReservationsGrid currentDate={currentDate}/>
          </div>
        </main>
      </section>
    </app>
  )
}

export default App
