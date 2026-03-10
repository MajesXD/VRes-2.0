import Reservation from "./Reservation";

function Saturday() {
  const tableRow = 1;
  return (
    <>
        <div className="table_hour" style={{ gridRow: {tableRow} }}>  
        <p>12:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: {tableRow} }}>
        <p>13:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 9 }}>
        <p>14:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 13 }}>
        <p>15:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 17 }}>
        <p>16:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 21 }}>
        <p>17:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 25 }}>
        <p>18:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 29 }}>
        <p>19:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 33 }}>
            <p>20:00</p>
        </div>

        <div className="table_hour" style={{ gridRow: 37 }}>
            <p>21:00</p>
        </div>
    </>
  );
}

export default Saturday;