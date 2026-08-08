import './reservations.css'
import {colors} from "../assets/colors";
import Person from '../assets/Person';
import Clock from '../assets/Clock';
import Web from '../assets/Web';
import Phone from '../assets/Phone';
import WalkIn from '../assets/WalkIn';


function Reservation({
    client,
    amount,
    date,
    time,
    duration,
    note,
    startHour,
}) {
    const reservationHour = Number(time.split(":")[0]);
    const reservationMinute = Number(time.split(":")[1]);
    let gridRow = (reservationHour - startHour) * 4 + 1;
    if (reservationMinute === 15) {
        gridRow += 1;
    }
    else if (reservationMinute === 30) {
        gridRow += 2;
    }
    else if (reservationMinute === 45) {
        gridRow += 3;
    }
    return (
        <section className="reservation" style={{gridRowStart: gridRow}}>
            <div>{client} {amount} {date} {time} {duration} {note}</div>
        </section>
    );
};



export default Reservation;