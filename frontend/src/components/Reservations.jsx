import './reservations.css'
import {colors} from "../assets/colors";
import * as icons from '../assets';


function Reservation({
    client,
    amount,
    date,
    time,
    duration,
    note,
    startHour,
}) {
    // Wyliczanie kratki rozpoczęcia rezerwacji
    const reservationHour = Number(time.split(":")[0]);
    const reservationMinute = Number(time.split(":")[1]);
    let gridRow = (reservationHour - startHour) * 4 + 1;
    let gridStart = 4;
    if (reservationMinute === 15) {
        gridRow += 1;
        gridStart = 1;
    }
    else if (reservationMinute === 30) {
        gridRow += 2;
        gridStart = 2;
    }
    else if (reservationMinute === 45) {
        gridRow += 3;
        gridStart = 3;
    }

    // Wyliczenie długości kratek rezerwacji
    const durationHour = Number(duration.split(":")[0]);
    const durationMinute = Number(duration.split(":")[1]);
    let gridHeight = durationHour * 4;
    if (durationMinute === 15) {
        gridHeight += 1;
    }
    else if (durationMinute === 30) {
        gridHeight += 2;
    }
    else if (durationMinute === 45) {
        gridHeight += 3;
    }

    let gridGhostHeight = 0;
    if (durationMinute === 15 && durationHour === 0) {
        gridGhostHeight += 3;
    }
    else if (durationMinute === 30 && durationHour === 0) {
        gridGhostHeight += 2;
    }
    else if (durationMinute === 45 && durationHour === 0) {
        gridGhostHeight += 1;
    }
    console.log(duration, durationHour, durationMinute)
    return (
        <section className="reservation" 
        style={{
        gridRowStart: gridRow, 
        height: `calc((${gridHeight} + ${gridGhostHeight}) * 30px - 10px)`, 
        gridColumn: `span ${amount}`,
        '--grid-row': gridRow,
        '--grid-start': gridStart,
        '--amount': amount,
        '--grid-height': gridHeight,
        '--grid-ghost-height': gridGhostHeight,}}
        >
            <p>
                <div>
                    <icons.Person color={colors.textDarkBlue} height='16px' width='18px'/>
                    {amount}
                </div>
                <div>
                    <icons.Clock color={colors.textDarkBlue} height='16px' width='18px'/>
                    {duration.slice(0, 5)}
                </div>
            </p>
            <p>
                <div>
                    <icons.Phone color={colors.textDarkBlue} height='16px' width='18px'/>{client}
                </div>
            </p>
        </section>
    );
};



export default Reservation;