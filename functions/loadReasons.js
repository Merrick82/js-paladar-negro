function loadReasons() {
    let reasons = document.getElementById('reasons');
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8001/reasons',
        dataType: 'json',
        success: function(data) {
            if (data.length === 0) {
                buildError();
                return;
            }

            data.forEach(reason => {
                buildReasons(reason);
            });
        },
        error: function(error) {
            buildError();
        }
    });
    
    function buildReasons(reason) {
        reasons.innerHTML += `
        <div class="col-lg-4 ${reason.style ? "mt-4 mt-lg-0" : ""}">
            <div class="box">
            <span>${reason.order}</span>
            <h4>${reason.title}</h4>
            <p>${reason.description}</p>
            </div>
        </div>
        `;
    }

    function buildError() {
        reasons.innerHTML = `
        <div class="col-lg-12">
            <h2 style="text-align: center; color: red; padding-top: 5%;">Te vas a tener que quedar con las ganas de saber las razones</h2>
        </div>
        `;
    }
}
