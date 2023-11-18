const scrollContainer = document.querySelector(".myCards");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollBy(0, 500);
});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollBy(0, -500);
});