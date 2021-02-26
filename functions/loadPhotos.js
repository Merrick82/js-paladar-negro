function loadPhotos() {
    let photos = document.getElementById('photos');
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8001/photos',
        dataType: 'json',
        success: function(data) {
            if (data.length === 0) {
                buildError();
                return;
            }

            data.forEach(photo => {
                buildPhotos(photo);
            });
        },
        error: function(error) {
            buildError();
        }
    });
    
    function buildPhotos(data) {
        photos.innerHTML += `
            <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                    <a href="assets/img/gallery/${data.img}" class="venobox" data-gall="gallery-item">
                        <img src="assets/img/gallery/${data.img}" alt="" class="img-fluid">
                    </a>
                </div>
            </div>
        `;
    }

    function buildError() {
        photos.innerHTML = `
        <div class="col-lg-12 col-md-4">
            <p style="color: red; text-align: center;">No encontramos fotos para cargar</p>
        </div>`;
    }
}
