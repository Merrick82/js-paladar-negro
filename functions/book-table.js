function bookTable(toSave) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8001/book',
        dataType: 'json',
        data: toSave,
        success: function(resp) {
            window.localStorage.clear();
            document.getElementById('book-status').innerHTML = `Reserva confirmada, con el nro <strong>${resp}</strong>. Muchas Gracias!`;
        },
        error: function(error) {
            console.log('ERROR', error);
        }
    });

}

function searchBookedTable(nameToFind) {
    let find = {
        "id": nameToFind
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:8001/search/booked',
        dataType: 'json',
        data: find,
        success: function(resp) {
            document.getElementById('booked-table-display').innerHTML = `
            <div class="section-title">
                <h2>Estado <span>Reserva</span></h2>
            </div>

            <form id="founded-booked-table-form" action="" onsubmit="close()" class="php-email-form">
                <div class="form-row">
                    <div class="col-lg-4 col-md-6 form-group">
                        <label for="founded-name">Nombre</label>
                        <input type="text" name="founded-name" class="form-control" id="founded-name" value="${resp.name}" disabled>
                    </div>
                    <div class="col-lg-4 col-md-6 form-group">
                        <label for="founded-email">Mail</label>
                        <input type="email" class="form-control" name="founded-email" id="founded-email" value="${resp.mail}" disabled>
                    </div>
                    <div class="col-lg-4 col-md-6 form-group">
                        <label for="founded-phone">Telefono</label>
                        <input type="number" class="form-control" name="founded-phone" id="founded-phone" value="${resp.telephone}" disabled>
                    </div>
                    <div class="col-lg-4 col-md-6 form-group">
                        <label for="founded-day">Dia</label>
                        <input type="text" name="founded-day" class="form-control" id="founded-day" value="${resp.day}" disabled>
                    </div>
                    <div class="col-lg-4 col-md-6 form-group">
                        <label for="founded-month">Mes</label>
                        <input type="text" name="founded-month" class="form-control" id="founded-month" value="${resp.month}" disabled>
                    </div>
                    <div class="col-lg-4 col-md-6 form-group">
                        <label for="founded-hour">Hora</label>
                        <input type="number" name="founded-hour" class="form-control" id="founded-hour" value="${resp.hour}" disabled>
                    </div>
                    <div class="col-lg-4 col-md-6 form-group">
                        <label for="founded-people">Comensales</label>
                        <input type="number" class="form-control" name="founded-people" id="founded-people" value="${resp.people}" disabled>
                    </div>
                </div>
                <div class="form-group">
                    <label for="founded-message">Comentarios</label>
                    <textarea id="founded-message" class="form-control" name="message" disabled>${resp.message}</textarea>
                </div>
                <div class="text-center"><button type="submit">Cerrar</button></div>
            </form>
            `;
        },
        error: function(error) {
            console.log('ERROR', error);
        }
    });

}

function close() {
    document.getElementById('booked-table-display').innerHTML = "";
}
