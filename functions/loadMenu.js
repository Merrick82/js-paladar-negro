function loadMenuPlates() {
    let menuPlates = document.getElementById('menu-plates');
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8001/menu',
        dataType: 'json',
        success: function(data) {
            if (data.length === 0) {
                buildError();
                return;
            }

            let dataOrdered = data.sort((a, b) => a.order - b.order);

            dataOrdered.forEach(menu => {
                buildMenuItem(menu);        
            });
        },
        error: function(error) {
            buildError();
        }
    });

    function buildMenuItem(menuItem) {
        menuPlates.innerHTML += `
        <div class="col-lg-6 menu-item ${menuItem.filterType}">
            <div class="menu-content">
                <a href="#">${menuItem.plate}</a><span>${menuItem.price}</span>
            </div>
            <div class="menu-ingredients">
                ${menuItem.ingridients}
            </div>
        </div>
        `;
    }

    function buildError() {
        menuPlates.innerHTML = `
        <div class="col-lg-12 menu-item">
            <h2 style="text-align: center; color: red; padding-top: 5%;">No se pudo cargar el menu</h2>
        </div>
        `;
    }
}
