import './reservations.css'
import {colors} from "../assets/colors";
import Person from '../assets/Person';
import Clock from '../assets/Clock';
import Web from '../assets/Web';
import Phone from '../assets/Phone';
import WalkIn from '../assets/WalkIn';

const Reservation = ({
    client,
    amount,
    date,
    time,
    duration,
    note,
    style,
}) => {
    return (
        <section className="reservation" style={style}>
            <div>{client}</div>
            <div>{amount}</div>
            <div>{date}</div>
            <div>{time}</div>
            <div>{duration}</div>
            <div>{note}</div>
            <Web
                height={18}
                width={18}
                color="black"
            />
        </section>
    );
};

export default Reservation;