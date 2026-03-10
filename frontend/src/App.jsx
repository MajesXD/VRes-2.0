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
import Transfer from './assets/Transfer';
import Card from './assets/Card';
import KmMb from './assets/KmMb';
import Cash from './assets/Cash';
import Voucher from './assets/Voucher';
import Reservation from './Reservation';
import DefaultWeek from './Week';
import Saturday from './Saturday';

function App() {

  return (
    <app>

      <panel>
        <section className='date_section'>
          <ArrowLeft height={20}/>
          <p>01.01.1001</p>
          <Callendar height={20}/>
          <ArrowRight height={20}/>
        </section>
        <form className='add_reservation_section'>
          <div className='add_reservation-row' style={{width: '160px'}}>
            <Web className={"clickable"} height={20}/>
            <Phone className={"clickable"} height={20}/>
            <WalkIn className={"clickable"} height={20}/>
          </div>
          <div className='add_reservation-row'>
            <Callendar color={colors.blue} height={18}/><input type="text" />
            </div>
          <div className='add_reservation-row'>
            <PersonalID color={colors.blue} height={16}/><input type="text" />
            </div>
          <div className='add_reservation-row'>
            <Person color={colors.blue} height={18}/><input type="text" />
            </div>
          <div className='add_reservation-row'>
            <Clock color={colors.blue} height={18}/><input type="text" />
            </div>
          <div className='add_reservation-row'>
            <Hourglass color={colors.blue} height={18}/><input type="text" />
            </div>
          <div className='add_reservation-row clickable'>
            <Plus height={18} />
            <p style={{color: 'white', fontSize: '16px'}}>Dodaj rezerwację</p>
            </div>

        </form>

        <section className='income_section'>


          <div className='income_row'>
            <p>Obrót dnia:</p>
            </div>

          <div className='income_row'>
            <div className='income_row_part'><Transfer color={colors.blue} height={20}/></div>
            <div className='income_row_part'><p className='income_quantity'>512</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><Card color={colors.blue} height={20}/></div>
            <div className='income_row_part'><p className='income_quantity'>138</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><Cash color={colors.blue} height={20} /></div>
            <div className='income_row_part'><p className='income_quantity'>100</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><KmMb color={colors.blue} height={20} width={50}/></div>
            <div className='income_row_part'><p className='income_quantity'>100,33</p></div>
            <div className='income_row_part'><p>zł</p></div>
          </div>

          <div className='income_row'>
            <div className='income_row_part'><Voucher color={colors.blue} height={20}/></div>
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
          <Saturday/>
          <Reservation people={1} time={100}/>
        </main>
    </app>
  )
}

export default App
