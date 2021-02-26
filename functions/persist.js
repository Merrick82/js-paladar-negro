let fields = ['name','email','phone','day','month','hour','people','message'];

// Persiste cada input del formulario de reserva en el localstorage
function persist(thisArg) {
    window.localStorage.setItem(thisArg.id, thisArg.value);
}

// Chequea si hay algo en el local storage y lo carga en el formulario
function checkPreData() {
    fields.forEach(field => {
        const storedValue = window.localStorage.getItem(field);
        if (storedValue) {
            document.getElementById(field).value = storedValue;
        }
    });
}