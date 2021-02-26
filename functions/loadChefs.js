function loadChefs() {
    let chefs = document.getElementById('chefs-list');
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8001/chefs',
        dataType: 'json',
        success: function(data) {
            if (data.length === 0) {
                buildError();
                return;
            }

            let dataOrdered = data.sort((a, b) => a.order - b.order);

            dataOrdered.forEach(chef => {
                buildChefs(chef);
            });
        },
        error: function(error) {
            buildError();
        }
    });
    
    function buildChefs(chef) {
        chefs.innerHTML += `
            <div class="col-lg-4 col-md-6">
                <div class="member">
                    <div class="pic"><img src="assets/img/chefs/${chef.photo}" class="img-fluid" alt=""></div>
                    <div class="member-info">
                        <h4>${chef.name}</h4>
                        <span>${chef.job}</span>
                        <div class="social">
                            <a href=""><i class="icofont-twitter"></i></a>
                            <a href=""><i class="icofont-facebook"></i></a>
                            <a href=""><i class="icofont-instagram"></i></a>
                            <a href=""><i class="icofont-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function buildError() {
        chefs.innerHTML = `
        <div class="col-lg-12 col-md-6">
            <p style="color: red; text-align: center;">Los chefs renunciaron, porque no los encuentro!</p>
        </div>`;
    }
}
