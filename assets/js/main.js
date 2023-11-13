const nav = document.querySelector("#nav-bar");
const abrir = document.querySelector("#burger-open");
const cerrar = document.querySelector("#burger-close");
const barraTransparente = document.querySelector(".container-open");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    barraTransparente.style.visibility = "hidden";
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    barraTransparente.style.visibility = "visible";
})