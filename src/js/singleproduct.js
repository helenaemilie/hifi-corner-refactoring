document.addEventListener("DOMContentLoaded", function() {

    let searchParams = new URLSearchParams(document.location.search);
    let paramsId = parseInt(searchParams.get("id"));

    const main = document.querySelector("main");

    fetch("https://hifi-corner.herokuapp.com/api/v1/products")
        .then(response => response.json())
        .then(data => {
            let product = data.find(
                product => product.sku == paramsId);
            
            let article = document.createElement("main");

            article.className = "main_singleproduct";
            article.innerHTML = `

                <div class="breadcrumbs_singleproduct">
                    <a class="breadcrumbs-singleproduct__links" href="../shop/index.html">Shop</a>
                    <p class="breadcrumbs-singleproduct__slash">/</p>
                    <a class="breadcrumbs-singleproduct__links" href="#">${product.category}</a>
                    <p class="breadcrumbs-singleproduct__slash">/</p>
                    <p class="breadcrumbs-singleproduct__product">${product.make} ${product.model}</p>
                </div>

                <div class="singleproduct-banner">
                    <img class="singleproduct-banner__gif"src="../img/banner_gif.gif" alt="Edinburgh store sale">
                </div>

                <section class="singleproduct-page">
                    <section class="singleproduct-page__left">
                        <div class="singleproduct-product__view">
                            <img src="${product.images}" alt="${product.make} ${product.model}">
                        </div>
                        <p class="singleproduct-view__text">More Views</p>
                        <div class="singleproduct__view">
                            <img class="singleproduct-image__views" src="${product.images}" alt="${product.make} ${product.model}">
                            <img class="singleproduct-image__views" src="${product.images}" alt="${product.make} ${product.model}">
                        </div>
                        </section>

                        <section class="singleproduct-page__right">
                            <h4 class="singleproduct-page__title">${product.make} ${product.model}</h4>
                            <br>
                        <div class="singleproduct-page__subtitles">
                            <a class="singleproduct-page__subtitle_link" href="#"><p class="singleproduct-page__subtitle">See other ${product.make} products</p></a>
                            <p class="singleproduct-page__price">£${(product.price)+(50+(product.price*0.05))}</p>
                            <p class="singleproduct-page__sale">£${product.price}</p>
                        </div>

                        <div class="singleproduct-page__product_description">
                            <p class="singleproduct-page__product_description_text">${product.description}</p>
                        </div>
                        <div class="singleproduct-page__buttons">
                            <button class="single-page__cart_button">Ask a question</button>
                            <button class="single-page__cart_button">Part exchange</button>
                            <button class="single-page__cart_button">Pay by finance</button>
                            <button class="single-page__cart_button">Seen a better price?</button>
                        </div>

                        <div class="singleproduct-page__colorpicker_container">
                            <div class="singleproduct-page__colorpicker_text">
                                <p class="singleproduct-page__colorpicker_finish">Finish<span class="singleproduct-page__colorpicker_reddot">*</span></p>
                                <p class="singleproduct-page__colorpicker_required">* Required Fields</p>
                            </div>
                            <div class="singleproduct-page__colorpicker">
                                <input class="singleproduct-page__colorpicker_input" type="radio" value="Black" name="color">
                                <label  class="singleproduct-page__colorpicker_label" for = "Black">Black</label>
                            </div>
                            <div class="singleproduct-page__colorpicker">
                                <input class="singleproduct-page__colorpicker_input" type="radio" value="Silver" name="color">
                                <label class="singleproduct-page__colorpicker_label" for = "Silver">Silver</label>
                            </div>
                        </div>

                        <div class="singleproduct-page__payment">
                            <p class="singleproduct-page__qty">Qty:</p>
                            <input class="singleproduct-page__qty_input" type="number" value="1">
                            <button class="singleproduct__page_cart">Add to cart</button>
                        </div>
                        <div class="singleproduct-page__paypal">
                            <p class="singleproduct-page__or">-OR-</p>
                            <a href="3"></a><img class="singleproduct-page__paypal_logo" src="../img/paypal_logo.png" alt="paypal"></a>
                            <hr class="singleproduct-page__horizontalrule">
                        </div>

                        <div class="singleproduct-page__info">
                            <h6 class="singleproduct-page__info_text">Additional Information</h6>
                            <table class="product__buttomright_table">
                                <tr class="product__table_border">
                                    <th class="product__buttomright_tableh"> Manufactor</th>
                                    <td class="product__buttomright_tabled">${product.make}</td>
                                </tr>
                                <tr class="product__table_border">
                                    <th class="product__buttomright_tableh">Manufactor link</th>
                                    <td class="product__buttomright_tabled"><span class="product_buttomright_link">${product.make}</span></td>
                            </tr> <tr class="product__table_border">
                                    <th class="product__buttomright_tableh">Free warranty</th>
                                    <td class="product__buttomright_tabled">3 years</td>
            
                                </tr>
                                <tr class="product__table_border">
                                    <th class="product__buttomright_tableh">Delivery charge</th>
                                    <td class="product__buttomright_tabled">Free</td>
                                </tr>
                                <tr class="product__table_border">
                                    <th class="product__buttomright_tableh"> Delivery time</th>
                                    <td class="product__buttomright_tabled"> 1 - 5 Working Days</td>
                                </tr>
                                <tr class="product__table_border">
                                    <th class="product__buttomright_tableh"> Card surcharges</th>
                                    <td class="product__buttomright_tabled" class="">No</td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </section>

                    <section class="product-page__description">
                        <h6 class="singleproduct-page__description_text">Description</h6>
                        <table class="product__buttomleft_table">
                            <tr>
                                <th class="product__buttomleft_tableh">Power Output 18 / 1 Ohm RMS</th>
                                <td class="product__buttomleft_tabled"> 45 W / 60 W 10 Hz</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Frequency Response</th>
                                <td class="product__buttomleft_tabled"> 70 kHz/td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Total Harmonic Distortion</th>
                                <td class="product__buttomleft_tabled"> 0.08 %</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Damping Factor</th>
                                <td class="product__buttomleft_tabled"> 100</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Input Sensitivity: MM</th>
                                <td class="product__buttomleft_tabled"> 2.2 mV / 47kOhm</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Input Sensitivity: MC</th>
                                <td class="product__buttomleft_tabled"> X</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Signal to Niose Ratio: MM / MC</th>
                                <td class="product__buttomleft_tabled"> 83 dB /</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Input Sensitivity: High level</th>
                                <td class="product__buttomleft_tabled"> 200mV / 20kOhm</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Input Sensitivity: Balanced High level</th>
                                <td class="product__buttomleft_tabled"> X</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Signal to Noise Ratio: High level</th>
                                <td class="product__buttomleft_tabled"> 102dB(2V input)</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Input Sensitivity: Power Amp Direct IN</th>
                                <td class="product__buttomleft_tabled"> X</td>
                            </tr>
                            <tr>
                                <th class="product__buttomleft_tableh">Signal to Noise Ratio: Power Amp Direct IN</th>
                                <td class="product__buttomleft_tabled"> X</td>
                            </tr>
                        </table>

                        <div class="singleproduct-page__buttomline">
                        <i class="fas fa-phone-alt"></i>
                            <a class="singleproduct-page__buttomline_link" href="#"><p>Call us about this product</p></a>
                        </div>
                    </section>
                </div>
            
            `
            main.appendChild(article);
        });
});