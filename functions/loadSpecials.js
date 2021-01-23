function loadSpecialPlates() {
    let specialPlates = document.getElementById('menu-specials');
    
    let specialItems = specials;
    specialItems.forEach(special => {
        buildSpecialItem(special);
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
}
