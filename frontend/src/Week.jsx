function Week({currentDate}) {
    if (currentDate.getDay() === 6) {
    const hours = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    return (
      <>
        {hours.map(hour => (
          <div
          key={hour}
          className="table_hour"
          style={{ gridRow: (hour - 12) + 1 + (hour - 12) * 3 }}>  
          <p>{hour}:00</p>
          </div>
        ))}
      </>
    );
    }
    else if (currentDate.getDay() === 0) {
        const hours = [12, 13, 14, 15, 16, 17, 18, 19];
        return (
          <>
            {hours.map(hour => (
              <div
              key={hour}
              className="table_hour"
              style={{ gridRow: (hour - 12) + 1 + (hour - 12) * 3 }}>  
              <p>{hour}:00</p>
              </div>
            ))}
          </>
        );
        }
    else {
        const hours = [15, 16, 17, 18, 19, 20, 21];
        return (
          <>
            {hours.map(hour => (
              <div
              key={hour}
              className="table_hour"
              style={{ gridRow: (hour - 15) + 1 + (hour - 15) * 3 }}>  
              <p>{hour}:00</p>
              </div>
            ))}
          </>
        );
        }
  
    return null;

}


export default Week;