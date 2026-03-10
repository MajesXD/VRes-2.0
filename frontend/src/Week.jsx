import Reservation from "./Reservation";

function DefaultWeek() {
  return (
    <>
        <div className="table_hour">
        <p>15:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 5 }}>
        <p>16:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 9 }}>
        <p>17:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 13 }}>
        <p>18:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 17 }}>
        <p>19:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 21 }}>
            <p>20:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 25 }}>
            <p>21:00</p>
        </div>
    </>
  );
}

export default DefaultWeek;