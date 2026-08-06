const GridCell = ({ time, row }) => {
    return (
        <div
            className="grid-cell"
            data-time={time}
            style={{gridRow: row, gridColumn: "2 / -1"}}
        >
        </div>
    );
};

export default GridCell;