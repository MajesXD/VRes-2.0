function Saturday() {
  const hours = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    return (
      <>
        {hours.map(hour => (
          <div className="table_hour" style={{ gridRow: (hour - 12) + 1 + (hour - 12) * 3 }}>  
          <p>{hour}:00</p>
          </div>
        ))}
      </>
    );
}


export default Saturday;