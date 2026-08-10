const GridCell = ({ time, row }) => {
    return (
        <div
            className="grid-cell"
            data-time={time}
            style={{gridRow: row, gridColumn: "1 / -1"}}
        >
        </div>
    );
};

export default GridCell;