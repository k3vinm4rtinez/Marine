// PROYECTOS

const processElement1 = document.getElementById("element-1");
const processElement2 = document.getElementById("element-2");
const processElement3 = document.getElementById("element-3");
const processElement4 = document.getElementById("element-4");
const processElement5 = document.getElementById("element-5");

window.addEventListener('scroll', function(){

    let positionElement1 = processElement1.getBoundingClientRect().top;

    if(positionElement1 < window.scrollY){
        processElement1.style.animation = "aparecer 1s ease-out";
        processElement1.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionElement2 = processElement2.getBoundingClientRect().top;

    if(positionElement2 < window.scrollY){
        processElement2.style.animation = "aparecer 1s ease-out";
        processElement2.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionElement3 = processElement3.getBoundingClientRect().top;

    if(positionElement3 < window.scrollY){
        processElement3.style.animation = "aparecer 1s ease-out";
        processElement3.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionElement4 = processElement4.getBoundingClientRect().top;

    if(positionElement4 < window.scrollY){
        processElement4.style.animation = "aparecer 1s ease-out";
        processElement4.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionElement5 = processElement5.getBoundingClientRect().top;

    if(positionElement5 < window.scrollY){
        processElement5.style.animation = "aparecer 1s ease-out";
        processElement5.style.visibility = "visible";
    }

});


