const GridCell = ({ time, row }) => {
    return (
        <div
            className="grid-cell"
            data-time={time}
            style={{gridRow: row}}
        >
        </div>
    );
};

export default GridCell;