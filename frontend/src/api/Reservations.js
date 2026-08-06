const API_URL = "http://127.0.0.1:8000/api/reservations/";

export async function getReservations(date = null) {
    let url = API_URL;

    if (date) {
        url += `?date=${date}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Nie udało się pobrać rezerwacji.");
    }

    return response.json();
}