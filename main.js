function showHide(){
    document.getElementById("mobileNav").classList.toggle("nav-shown");
    document.getElementById("mobileNav").classList.toggle("hidden");
    document.getElementById("burgerSVG").classList.toggle("hidden");
    document.getElementById("closeSVG").classList.toggle("hidden");
}

document.querySelector('.burger').addEventListener('click', showHide);
