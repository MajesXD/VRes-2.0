function Week({currentDate}) {
    if (currentDate.getDay() === 6) {
    const hours = Array.from(
    { length: endHour - startHour + 1 },
    (_, i) => startHour + i
);
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
  
    return null;

}


export default Week;