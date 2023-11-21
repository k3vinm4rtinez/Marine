const scrollContainer = document.querySelector(".myCards");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");
const sliderHeight = scrollContainer.offsetHeight;

nextBtn.addEventListener("click", (evt) =>{
    evt.preventDefault();
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollBy(0, sliderHeight);

    if(scrollContainer.scrollBy(0, sliderHeight)){
        nextBtn.disabled = true;
    }

});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollBy(0, -sliderHeight);

    if(scrollContainer.scrollBy(0, -sliderHeight)){
        backBtn.disabled = true;
    }
});
