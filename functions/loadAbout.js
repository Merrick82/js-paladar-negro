function loadAbout() {
    let navbar = document.getElementById('about-content');
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8001/about',
        dataType: 'json',
        success: function(data) {
            if (data.length === 0) {
                buildError();
                return;
            }

            buildAbout(data[0]);
        },
        error: function(error) {
            buildError();
        }
    });
    
    function buildAbout(data) {
        navbar.innerHTML += `
            <h3>${data.description}</h3>
            <p>${data.paragraph}</p>
            <p class="font-italic">${data.paragraph2}</p>
            <ul>
                <li><i class="bx bx-check-double"></i> ${data.item}</li>
                <li><i class="bx bx-check-double"></i> ${data.item1}</li>
                <li><i class="bx bx-check-double"></i> ${data.item2}</li>
            </ul>
            <p>${data.paragraph3}</p>
        `;
    }

    function buildError() {
        navbar.innerHTML = `<div class="align-items-center" style="color: red;">No encontramos datos para cargar</div>`;
    }
}
