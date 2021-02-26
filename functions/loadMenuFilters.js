function loadMenuFilters() {
    let filters = document.getElementById('menu-flters');
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8001/menu/filters',
        dataType: 'json',
        success: function(data) {
            if (data.length === 0) {
                buildError();
                return;
            }

            let dataOrdered = data.sort((a, b) => a.order - b.order);

            dataOrdered.forEach(filter => {
                buildFilters(filter);
            });
        },
        error: function(error) {
            buildError();
        }
    });
    
    function buildFilters(data) {
        var style = data.style !="" ? `class="${data.style}"` : "";
        filters.innerHTML += `
            <li data-filter="${data.filter}" ${style}>${data.title}</li>
        `;
    }

    function buildError() {
        filters.innerHTML = `<div class="align-items-center" style="color: red;">No encontramos filtros para cargar</div>`;
    }
}
