document.addEventListener("DOMContentLoaded", function() {

    const manufacturerListRight = document.querySelector(".shop-page__manufacturer");
    const manufacturerListLeft = document.querySelector(".sidebar__list_manufacturer");
    const makeArray = [];

    fetch("https://hifi-corner.herokuapp.com/api/v1/products")
      .then(response => response.json())
      .then(data => {

        function addToArray(){
            data.forEach(product => {
                if (makeArray.includes(product.make)) return;
                makeArray.push(product.make);
            });
        }
        addToArray();

        function createManufacturers(){
            makeArray.forEach(make => {
    
                let listItemRight = document.createElement("p");
                listItemRight.className = "shop-page__manufacturer_name";
                listItemRight.textContent = make;
    
                manufacturerListRight.appendChild(listItemRight);

                let listItemLeft = document.createElement("li");
                listItemLeft.className = "sidebar-list__item sidebar-list__manufacturer";
                listItemLeft.textContent = make;
    
                manufacturerListLeft.appendChild(listItemLeft);
            });
        }
        makeArray.sort();
        createManufacturers();
    });
});
  