document.addEventListener("DOMContentLoaded", function() {
    fetch("https://hifi-corner.herokuapp.com/api/v1/products")
      .then(response => response.json())
      .then(data => {

        const cardWrapper = document.querySelector(".shop-page__product_cards");
        const manufacturerButtons = document.querySelectorAll(".shop-page__manufacturer_name");
        const categoryFilterButtons = document.querySelectorAll(".list-item__upper");
        const priceFilterButtons = document.querySelectorAll(".sidebar-list__item_price");
        const manufacturerButtonsSideBar = document.querySelectorAll(".sidebar-list__manufacturer");

        const titleDisplay = document.querySelector(".shop-page_product_title");
        let currentTitle;
        let productArray = [];

        const sortSelect = document.querySelector(".shop-page__sortby_select");
        const sortArrow = document.querySelector(".shop-page__sortby_arrow");
        let sortSelected = sortSelect.value;
        let arrowDirection = "down";

        let totalCards = document.querySelector(".shop-page__total");

        let viewMode = "grid";
        let listView = document.querySelector(".shop-page_view_as");
        let gridView = document.querySelector(".shop-page__product_cards");

        let searchParams = new URLSearchParams(document.location.search);
        let searched = searchParams.get("search");
        let searchForm = document.querySelector(".search-bar");


        function totalCardsShown(){
            totalCards.textContent = productArray.length + " Item(s)";
        }

                // Function for creating the product cards
        function createCards(){
            productArray.forEach(product => {

                if(viewMode === "grid"){
                    let div = document.createElement("div");
                    div.className = "product-cards__item";
                    div.setAttribute("data-id", product.sku);
            
                    div.innerHTML = `
                        <a href="../singleproduct/index.html?id=${product.sku}"><img
                            class="product-cards__img"
                            src="${product.images}"
                            alt="${product.make} ${product.model}"
                        /></a>
                        <h3 class="product-cards__title">${product.make} ${product.model}</h3>
                        <div class="product-cards__prices">
                            <p class="product-cards__price_left">£${(product.price)+(50+(product.price*0.05))}</p>
                            <p class="product-cards__price_right">£${product.price}</p>
                        </div>
                        <button class="product-cards__cart_button">Add to cart</button>
                    `;
                    cardWrapper.appendChild(div);      

                }else{
                    let div = document.createElement("div");
                    div.className = "shop-page_view_as";
                    div.setAttribute("data-id", product.sku);
            
                    div.innerHTML = `
                        <a href="../singleproduct/index.html?id=${product.sku}"><img
                            class="view-as__img"
                            src="${product.images}"
                            alt="${product.make} ${product.model}"
                        /></a>
                        <h3 class="shop-page__view_as_title">${product.make} ${product.model}</h3>
                        <div class="shop-page__view_as_price">
                            <p class="shop-page__view_as_price_left">£${(product.price)+(50+(product.price*0.05))}</p>
                            <p class="shop-page__view_as_price_right">£${product.price}</p>
                        </div>
                        <button class="shop-page__cart_button">Add to cart</button>
                    `;
                    cardWrapper.appendChild(div);           
                }
            });

            totalCardsShown();
        }

        function showAllProducts(){
            productArray = data;
            createCards();
        }
        if(!searched){
            showAllProducts();
        }else{
            showSearched();
        }
        

                // Function for clearing the cards from the array
        function clearCards(){
            while (cardWrapper.lastElementChild){
                cardWrapper.removeChild(cardWrapper.lastElementChild);
            }
        }

                // Function for showing the specific manufacturers products
        function showSpecificProducts(filter, type){
            clearCards();
            productArray = data.filter(product => product[type] === filter);
            createCards();
        }

                // Function for showing specific priced products
        function showPriceProducts(filterMin, filterMax){
            clearCards();
            if(currentTitle){
                productArray = data.filter(product => product.price > filterMin && product.price < filterMax && (product.category === currentTitle || product.manufacturer === currentTitle));
            }else{
               productArray = data.filter(product => product.price > filterMin && product.price < filterMax); 
            }
            createCards();
        }

                // Sorting function for the select input
        function sortBy(property){
            if(arrowDirection === "down"){
                return function(a, b){
                    if(a[property] > b[property]){
                        return -1;
                    }else if(a[property] < b[property]){
                        return 1;
                    }
                    return 0;
                }
            }else{
                return function(a, b){
                    if(a[property] > b[property]){
                        return 1;
                    }else if(a[property] < b[property]){
                        return -1;
                    }
                    return 0;
                }
            }
        }

                // Changes the arrow direction
        function sortArrowChange(){
            if(arrowDirection === "down"){
                sortArrow.classList.add("shop-page__sortby_arrow-rotated");
                arrowDirection = "up";
            }else{
                sortArrow.classList.remove("shop-page__sortby_arrow-rotated");
                arrowDirection = "down";
            }
        }

                // Sorting function for price or name
        function sortArray(){
            if(sortSelected === "price"){
                productArray.sort(sortBy("price"));
            }else{
                productArray.sort(sortBy("make"));
            }
        }

        function showSearched(){
            clearCards();
            productArray = [];

            data.filter(product => {
                if(product.make.toLowerCase().includes(searched.toLowerCase()) || product.model.toLowerCase().includes(searched.toLowerCase()) || product.category.toLowerCase().includes(searched.toLowerCase())){
                    productArray.push(product);
                }
            });
            createCards();
        }


        sortArrow.addEventListener("click", () => {
            clearCards();
            sortArrowChange();
            sortArray();
            createCards();
        });

        sortSelect.addEventListener("change", () => {
            clearCards();
            sortSelected = sortSelect.value;
            sortArray();
            createCards();
        });

        manufacturerButtons.forEach(button => {
            button.addEventListener("click", function(){
                showSpecificProducts(this.textContent, "make");
                titleDisplay.textContent = this.textContent;
                currentTitle = titleDisplay.textContent;
            });
        });

        manufacturerButtonsSideBar.forEach(button => {
            button.addEventListener("click", function(){
                showSpecificProducts(this.textContent, "make");
            });
        });

        categoryFilterButtons.forEach(button => {
            button.addEventListener("click", function(){
                showSpecificProducts(this.textContent, "category");
                titleDisplay.textContent = this.textContent;
                currentTitle = titleDisplay.textContent;
            });
        });

        priceFilterButtons.forEach(button => {
            button.addEventListener("click", function(){
                const minPrice = this.firstElementChild.textContent;
                const maxPrice = this.lastElementChild.textContent;
                showPriceProducts(parseInt(minPrice), parseInt(maxPrice));
            });
        });

        document.querySelector(".shop-page__sortby_squares").addEventListener("click", function(){
            viewMode = "grid";
            clearCards();
            createCards();
        });
        document.querySelector(".shop-page__sortby_list").addEventListener("click", function(){
            viewMode = "list";
            clearCards();
            createCards();
        });

        document.querySelector(".search-bar__icon").addEventListener("click", () => {
            searchForm.submit();
        });
        
        searchForm.addEventListener("submit", function(event) {
            showSearched();
        });
    });
});