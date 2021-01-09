let reservation = new Reservation('Martin Gomez', '25/03/2021', '13:00', 3, 'martin.gomez@gmail.com', '1549890090');

let result = reservation.createReservation();

console.log('Datos reserva:\n\n');

console.log('Nombre: ', result.reservationName);
console.log('Fecha: ', result.date);
console.log('Comensales: ', result.dinersQty);
console.log('Precio Reserva: ', result.reservationPrice);