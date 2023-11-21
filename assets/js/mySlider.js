const scrollContainer = document.querySelector(".myCards");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");
const sliderHeight = scrollContainer.offsetHeight;

const firstCards = document.querySelector(".firstCards");
const secondCards = document.querySelector(".secondCards");

nextBtn.addEventListener("click", (evt) =>{
    evt.preventDefault();
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollBy(0, sliderHeight);

    nextBtn = false;
});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollBy(0, -sliderHeight);

    nextBtn = true;

});