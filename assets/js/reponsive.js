var burger = document.getElementById("burger");
var navbarContainer = document.getElementById("navbar-container");

burger.addEventListener("click",function(){
    navbarContainer.classList.toggle("navbar-container-active")
})

