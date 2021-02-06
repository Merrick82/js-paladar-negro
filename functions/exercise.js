// import menuItems from "../classes/menu.json"

let reservation = new Reservation('Martin Gomez', '25/03/2021', '13:00', 3, 'martin.gomez@gmail.com', '1549890090');

let result = reservation.createReservation();

console.log('Datos reserva:\n\n');

console.log('Nombre: ', result.reservationName);
console.log('Fecha: ', result.date);
console.log('Comensales: ', result.dinersQty);
console.log('Precio Reserva: ', result.reservationPrice);

// Estos metodos estan en un js que carga el json y appendea el componente html que muestra cada opcion de menu
loadMenuPlates();
loadSpecialPlates();

// Funcion sencilla con jquery que realiza un slide con los tipos de eventos a realizar en el restaurante
$(function specialEventSlider() {
    let changeSlideTime = 5000; 
    let transitionSpeed = 600;

    let simple_slideshow = $("#slideShow");
    let listItems = simple_slideshow.children('div');
    let listLen = listItems.length;
    let i = 0;

    changeList = function () {
        listItems.eq(i).fadeOut(transitionSpeed, function () {
            i += 1;
            if (i === listLen) {
                i = 0;
            }

            listItems.eq(i).fadeIn(transitionSpeed);
        });
    };

    listItems.not(':first').hide();
    setInterval(changeList, changeSlideTime);
});