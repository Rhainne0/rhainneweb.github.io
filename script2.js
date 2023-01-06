let LastImage = document.getElementsByClassName("focus2-img")[0];
let Historical = document.querySelector("#landing h1");
let GREECE = document.querySelector("#landing h2");
let Developer = document.querySelector("#landing h3");
let Button = document.querySelector(".btn");

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    MidImage.style.left = value * 0.9 + 'px';
    

    FrontImage.style.right = value * 0.8 + 'px';
    

    LastImage.style.top = value * 0.8 + 'px';

    Historical.style.right = value * 0.5 + 'px';
    Historical.style.marginTop = value * 0.3 + 'px';
    Developer.style.left = value * 0.5 + 'px';
    Developer.style.marginTop = value * 0.3 + 'px';
    Button.style.marginTop = value * 0.1 + 'px';
    
})