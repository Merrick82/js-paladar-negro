let reservation = new Reservation('Martin Gomez', '25/03/2021', '13:00', 3, 'martin.gomez@gmail.com', '1549890090');
let result = reservation.createReservation();

console.log('Datos reserva:\n\n');

console.log('Nombre: ', result.reservationName);
console.log('Fecha: ', result.date);
console.log('Comensales: ', result.dinersQty);
console.log('Precio Reserva: ', result.reservationPrice);

// Metodo que invoca los metodos inicializadores
initialize();

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

// Llamas ajax a un backend hecho en node js, que consulta una base en firestore con cada campo a renderizar en el html
function initialize() {
    loadMenuPlates();
    loadSpecialPlates();
    loadReasons();
    loadNavbar();
    loadChefs();
    loadAbout();
    loadMenuFilters();
    loadPhotos();
    checkPreData();
}

// metodo que inicia el proceso de registracion de reserva
function saveRegistration() {
    if (validate()) {
        let data = buildObject();

        let id = bookTable(data);
        cleanErrorMsg();
        document.getElementById("book-table-form").reset();
    }
}

// metodo que busca una reserva
function searchRegistration() {
    if (validateSearch()) {
        let data = document.getElementById('nro').value;

        searchBookedTable(data);
        document.getElementById("booked-table-form").reset();
    }
}

function cleanErrorMsg() {
    document.getElementById('error-name').innerHTML = "";
    document.getElementById('error-mail').innerHTML = "";
    document.getElementById('error-phone').innerHTML = "";
    document.getElementById('error-day').innerHTML = "";
    document.getElementById('error-month').innerHTML = "";
    document.getElementById('error-hour').innerHTML = "";
    document.getElementById('error-people').innerHTML = "";
}

function buildObject() {
    let object = {
    "name": document.getElementById('name').value.toLowerCase(),
    "mail": document.getElementById('email').value.toLowerCase(),
    "telephone": document.getElementById('phone').value.toLowerCase(),
    "day": document.getElementById('day').value.toLowerCase(),
    "month": document.getElementById('month').value.toLowerCase(),
    "hour": document.getElementById('hour').value.toLowerCase(),
    "people": document.getElementById('people').value.toLowerCase(),
    "message": document.getElementById('message').value.toLowerCase()
    }

    return object;
}