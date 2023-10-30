const nav = document.querySelector("#nav-bar");
const abrir = document.querySelector("#burger-open");
const cerrar = document.querySelector("#burger-close");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})