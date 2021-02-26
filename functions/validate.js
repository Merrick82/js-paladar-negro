let months = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'setiembre', 'octubre', 'noviembre', 'diciembre' ];

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// valida formulario de registracion de reserva
function validate() {
    let status = true;
    const username = document.getElementById('name');
    const emailAddress = document.getElementById('email');
    const telephone = document.getElementById('phone');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const hour = document.getElementById('hour');
    const people = document.getElementById('people');
    
    if (username.value === "") {
        status = false;
        document.getElementById('error-name').innerHTML = "Por favor ingresa un nombre";
        username.focus();
    }

    if (!emailIsValid(emailAddress.value)) {
        status = false;
        document.getElementById('error-mail').innerHTML = "Por favor ingresa un email valido";
        emailAddress.focus();
    }

    if (telephone.value === "") {
        status = false;
        document.getElementById('error-phone').innerHTML = "Por favor ingrese un telefono";
        telephone.focus();
    } else if (telephone.value.length < 8) {
        status = false;
        document.getElementById('error-phone').innerHTML = "Por favor ingrese un telefono valido";
        telephone.focus();
    }

    if (day.value === "") {
        status = false;
        document.getElementById('error-day').innerHTML = "Por favor ingrese un dia";
        day.focus();
    } else if (day.value < 1 || day.value > 31) {
        status = false;
        document.getElementById('error-day').innerHTML = "Por favor ingrese un dia valido";
        day.focus();
    }

    if (month.value === "") {
        status = false;
        document.getElementById('error-month').innerHTML = "Por favor ingrese un mes";
        month.focus();
    } else if (!months.includes(month.value)) {
        status = false;
        document.getElementById('error-month').innerHTML = "Por favor ingrese un mes valido";
        month.focus();
    }

    if (hour.value === "") {
        status = false;
        document.getElementById('error-hour').innerHTML = "Por favor ingrese una hora";
        hour.focus();
    } else if (hour.value <= 11 || hour.value >= 24) {
        status = false;
        document.getElementById('error-hour').innerHTML = "Por favor ingrese una hora valida";
        hour.focus();
    }

    if (people.value === "") {
        status = false;
        document.getElementById('error-people').innerHTML = "Por favor ingrese la cantidad de comensales";
        people.focus();
    } else if (people.value <= 0) {
        status = false;
        document.getElementById('error-people').innerHTML = "Por favor ingrese al menos un comensal";
        people.focus();
    }

    return status;
  }

  // valida formulario de busqueda de reserva
  function validateSearch() {
    let status = true;

    const nro = document.getElementById('nro');

    if (nro.value === "") {
        status = false;
        document.getElementById('error-nro').innerHTML = "Por favor ingrese su numero de reserva";
        nro.focus();
    }

    return status;
  }