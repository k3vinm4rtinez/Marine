const scrollContainer = document.querySelector(".myCards");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");
const sliderHeight = scrollContainer.offsetHeight;

nextBtn.addEventListener("click", (evt) =>{
    evt.preventDefault();
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollBy(0, sliderHeight);

});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollBy(0, -sliderHeight);

    if(scrollContainer.scrollHeight(sliderHeight)){
        backBtn.disabled = false;
    }else{
        backBtn.disabled = true;
    }
});
