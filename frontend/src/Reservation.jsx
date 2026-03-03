import './styles/Reservation.css'
import {colors} from "./assets/colors";
const Reservation = ({people = '', time = ''}) => (
    <div className={`reservation people${people} time${time}`}>
        
    </div>

)
export default Reservation;