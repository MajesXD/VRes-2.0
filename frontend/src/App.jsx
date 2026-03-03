import './styles/App.css'
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

function App() {

  return (
    <app>
      <main>
      </main>
      <panel>
        <section className='date_section'>
          <ArrowLeft height={20}/>
          <p>01.01.1001</p>
          <Callendar height={20}/>
          <ArrowRight height={20}/>
        </section>
        <form className='add_reservation_section'>
          <div className='add_reservation-row' style={{width: '160px'}}><Web height={20} /><Phone height={20}/><WalkIn height={20}/></div>
          <div className='add_reservation-row'><Callendar color={colors.blue} height={18}/><input type="text" /></div>
          <div className='add_reservation-row'><PersonalID color={colors.blue} height={16}/><input type="text" /></div>
          <div className='add_reservation-row'><Person color={colors.blue} height={18}/><input type="text" /></div>
          <div className='add_reservation-row'><Clock color={colors.blue} height={18}/><input type="text" /></div>
          <div className='add_reservation-row'><Hourglass color={colors.blue} height={18}/><input type="text" /></div>
          <div className='add_reservation-row'><Plus height={18} /><p style={{color: 'white', fontSize: '16px'}}>Dodaj rezerwację</p></div>

        </form>

        <section className='income_section'>

        </section>
      </panel>
    </app>
  )
}

export default App
