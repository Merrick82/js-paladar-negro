function loadMenuPlates() {
    let menuPlates = document.getElementById('menu-plates');
    
    let menuItems = menu;
    menuItems.forEach(menu => {
        buildMenuItem(menu);
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
}
