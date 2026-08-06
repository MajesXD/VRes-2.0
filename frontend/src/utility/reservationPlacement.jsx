const reservationPlacement = (reservation) => {
    let gridRow = "";

if (reservation.time === "15:00:00") {
    gridRow = "4";
} else if (reservation.time === "16:00:00") {
    gridRow = "5";
} else if (reservation.time === "17:00:00") {
    gridRow = "6";
} else if (reservation.time === "18:00:00") {
    gridRow = "7";
} else if (reservation.time === "19:00:00") {
    gridRow = "8";
} else if (reservation.time === "20:00:00") {
    gridRow = "9";
} else if (reservation.time === "21:00:00") {
    gridRow = "10";
}


    return {
        gridRow,
    };
};

export default reservationPlacement;