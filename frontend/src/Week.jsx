function Week() {
  const hours = [15, 16, 17, 18, 19, 20, 21];
    return (
      <>
        {hours.map(hour => (
          <div className="table_hour" style={{ gridRow: (hour - 15) + 1 + (hour - 15) * 3 }}>  
          <p>{hour}:00</p>
          </div>
        ))}
      </>
    );
}


export default Week;