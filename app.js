const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector("#close");
const searchIcon = document.querySelector("#search-icon");
const searchForm = document.querySelector("#search-form");


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}

window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

searchIcon.onclick = () =>{
    if(menu.classList.remove("fa-times") || navbar.classList.remove("active")){
        menu.classList.remove("fa-times")
        navbar.classList.remove("active")
    }else{
        searchForm.classList.toggle("active")
    }
}

closeBtn.onclick = () =>{
    searchForm.classList.remove("active")
}


