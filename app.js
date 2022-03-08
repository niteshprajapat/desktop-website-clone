const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector("#close");
const searchIcon = document.querySelector("#search-icon");
const searchForm = document.querySelector("#search-form");
const loginBtn = document.querySelector(".login");
const closeBtn2 = document.querySelector("#close2");
const loginSection = document.querySelector("#login-section");


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

loginBtn.onclick = () =>{
    if(menu.classList.remove("fa-times") || navbar.classList.remove("active")){
        menu.classList.remove("fa-times")
        navbar.classList.remove("active")
    }else{
        loginSection.classList.toggle("active")
    }
}

closeBtn2.onclick = () =>{
    loginSection.classList.remove("active")
}



var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    loop:true,
});


// Scroll UP
function scrollUp(){
    const scrollUp = document.querySelector("#scroll-up")
    if(this.scrollY >= 350){
        scrollUp.classList.add("show-scroll")
    }else{
        scrollUp.classList.remove("show-scroll")
    }
}

window.addEventListener("scroll", scrollUp)