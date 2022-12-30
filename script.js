let LastImage = document.getElementsByClassName("focus-img")[0];
let MidImage = document.getElementsByClassName("bush1-img")[0];
let FrontImage = document.getElementsByClassName("bush2-img")[0];
let Historical = document.querySelector("#landing h1");
let GREECE = document.querySelector("#landing h2");
let Myth = document.querySelector("#landing h3");
let Button = document.querySelector(".btn");

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    MidImage.style.left = value * 0.9 + 'px';
    

    FrontImage.style.right = value * 0.8 + 'px';
    

    LastImage.style.top = value * 0.8 + 'px';

    Historical.style.right = value * 0.5 + 'px';
    Historical.style.marginTop = value * 0.3 + 'px';
    GREECE.style.bottom = value * 0.7 + 'px';
    GREECE.style.left = value * 0.3 + 'px';
    Myth.style.left = value * 0.3 + 'px';
    Myth.style.marginTop = value * 0.3 + 'px';
    Button.style.marginTop = value * 0.1 + 'px';
    
})