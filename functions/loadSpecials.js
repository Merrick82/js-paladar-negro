function loadSpecialPlates() {
    let specialPlates = document.getElementById('menu-specials');
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8001/specials',
        dataType: 'json',
        success: function(data) {
            if (data.length === 0) {
                buildError();
                return;
            }

            data.forEach(special => {
                buildSpecialItem(special);
            });
        },
        error: function(error) {
            buildError();
        }
    });
    
    function buildSpecialItem(specialItem) {
        specialPlates.innerHTML += `
        <div class="tab-pane ${specialItem.show ? "active show" : ""}" id="${specialItem.id}">
            <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>${specialItem.plate}</h3>
                    <p class="font-italic">${specialItem.description}</p>
                    <p>${specialItem.detail}</p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="${specialItem.image}" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        `;
    }

    function buildError() {
        specialPlates.innerHTML = `
        <div class="row">
            <div class="col-lg-8 menu-item">
                <h2 style="text-align: center; color: red; padding-top: 5%;">No se pudo cargar los especiales</h2>
            </div>
        </div>
        `;
    }
}
