import './styles/Reservation.css'
import {colors} from "./assets/colors";
import Person from './assets/Person';
import Clock from './assets/Clock';
import Web from './assets/Web';
import Phone from './assets/Phone';
import WalkIn from './assets/WalkIn';
const Reservation = ({people = '', time = ''}) => (
    <section className={`reservation people${people} time${time}`}>
        <div className='reservation_row'><Person height={18} color='black'/><p>1</p><Clock height={18} color='black'/><p>2h</p></div>
        <div className='reservation_row'><Web height={18} color='black'/><p></p></div>
    </section>

)
export default Reservation;