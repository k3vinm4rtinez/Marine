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

const $form = document.getElementById('form');
const $buttonMailto = document.getElementById('mimail');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:marinedesign.uy@gmail.com?subject=${form.get('name')} - ${form.get('email')} - ${form.get('phone')}&body=${form.get('message')}`)
    $buttonMailto.click()
}