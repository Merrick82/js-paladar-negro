function loadNavbar() {
    let navbar = document.getElementById('navbar');
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8001/navbar',
        dataType: 'json',
        success: function(data) {
            if (data.length === 0) {
                buildError();
                return;
            }

            let dataOrdered = data.sort((a, b) => a.order - b.order);

            dataOrdered.forEach(nav => {
                buildNavbar(nav);
            });
        },
        error: function(error) {
            buildError();
        }
    });
    
    function buildNavbar(nav) {
        var style = nav.style !="" ? `class="${nav.style}"` : "";
        navbar.innerHTML += `<li ${style}><a href="${nav.id}">${nav.title}</a></li>`;
    }

    function buildError() {
        navbar.innerHTML = `<div class="align-items-center" style="color: red;">No encontramos navbar para cargar</div>`;
    }
}
