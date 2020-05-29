document.addEventListener ("DOMContentLoaded", (event) => {

    let index = 0;
    const sliderImage = document.querySelector(".slider__img");
    const sliderText = document.querySelector(".slider__title")
    const arrowNext = document.querySelector(".slider__arrow_right");
    const arrowPrevious = document.querySelector(".slider__arrow_left");
    const sliderImageArray = [
        "primaluna-black.png",
        "grado.png",
        "sennheiser.png",
        "sugden.jpg"
    ];
    const sliderTextArray = [
        "Primaluna Sounds",
        "Grado",
        "Sennheiser",
        "Sugden"
    ];
    
    function changeImage(e){
        if(e.target.classList.contains("slider__arrow_right")){
            if(index < sliderImageArray.length-1){
                index++;
            }else{
                index = 0;
            }
        }
        if(e.target.classList.contains("slider__arrow_left")){
            if(index > 0){
                index--;
            }else{
                index = sliderImageArray.length-1;
            }
        }
        sliderImage.setAttribute("src", "img/slider/"+sliderImageArray[index]);
        sliderText.textContent = sliderTextArray[index];
    }
    
    arrowNext.addEventListener("click", changeImage);
    arrowPrevious.addEventListener("click", changeImage);
});