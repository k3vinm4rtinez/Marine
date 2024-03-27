// INDEX

const tablet = document.getElementById("tablet");

window.addEventListener('scroll', function(){

    let positionTablet = tablet.getBoundingClientRect().top;

    if(positionTablet < (window.scrollY*4)){
        tablet.style.animation = "tablet 1.5s ease-out";
        tablet.style.visibility = "visible";
    }

});

// PROYECTOS

// El proceso creativo

const processElement1 = document.getElementById("element-1");
const processElement2 = document.getElementById("element-2");
const processElement3 = document.getElementById("element-3");
const processElement4 = document.getElementById("element-4");
const processElement5 = document.getElementById("element-5");

window.addEventListener('scroll', function(){

    let positionElement1 = processElement1.getBoundingClientRect().top;
    let elementHeight = processElement1.clientHeight;

    if(positionElement1 < (window.scrollY - elementHeight)){
        processElement1.style.animation = "aparecer 1s ease-out";
        processElement1.style.visibility = "visible";
    }

});


window.addEventListener('scroll', function(){

    let positionElement2 = processElement2.getBoundingClientRect().top;
    let elementHeight = processElement2.clientHeight * 2;

    if(positionElement2 < (window.scrollY - elementHeight)){
        processElement2.style.animation = "aparecer 1s ease-out";
        processElement2.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionElement3 = processElement3.getBoundingClientRect().top;
    let elementHeight = processElement3.clientHeight * 3;

    if(positionElement3 < (window.scrollY - elementHeight)){
        processElement3.style.animation = "aparecer 1s ease-out";
        processElement3.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionElement4 = processElement4.getBoundingClientRect().top;
    let elementHeight = processElement4.clientHeight * 4;

    if(positionElement4 < (window.scrollY - elementHeight)){
        processElement4.style.animation = "aparecer 1s ease-out";
        processElement4.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionElement5 = processElement5.getBoundingClientRect().top;
    let elementHeight = processElement5.clientHeight * 5;

    if(positionElement5 < (window.scrollY - elementHeight)){
        processElement5.style.animation = "aparecer 1s ease-out";
        processElement5.style.visibility = "visible";
    }

});

// SERVICIOS

const titlePlan1 = document.getElementById("tp1");
const titlePlan2 = document.getElementById("tp2");
const titlePlan3 = document.getElementById("tp3");

const plan1 = document.getElementById("plan1");
const plan2 = document.getElementById("plan2");
const plan3 = document.getElementById("plan3");

window.addEventListener('scroll', function(){

    let positionPlan = plan1.getBoundingClientRect().top;

    if(positionPlan < (window.scrollY/2)){
        plan1.style.animation = "plan1 1s ease-out";
        plan1.style.visibility = "visible";
        titlePlan1.style.animation = "plan2 1s ease-out";
        titlePlan1.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionPlan = plan2.getBoundingClientRect().top;

    if(positionPlan < (window.scrollY/3)){
        plan2.style.animation = "plan2 1s ease-out";
        plan2.style.visibility = "visible";
        titlePlan2.style.animation = "plan1 1s ease-out";
        titlePlan2.style.visibility = "visible";
    }

});

window.addEventListener('scroll', function(){

    let positionPlan = plan3.getBoundingClientRect().top;

    if(positionPlan < (window.scrollY/4)){
        plan3.style.animation = "plan1 1s ease-out";
        plan3.style.visibility = "visible";
        titlePlan3.style.animation = "plan2 1s ease-out";
        titlePlan3.style.visibility = "visible";
    }

});


