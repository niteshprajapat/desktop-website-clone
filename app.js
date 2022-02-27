const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}
