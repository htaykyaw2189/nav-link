const menu = document.querySelector(".menu");
const navlink = document.querySelector(".nav-link")

menu.addEventListener("click",() => {
    navlink.classList.toggle("show");
    if(navlink.classList.contains("show")) {
        menu.src = "./favicon_io/icon/cross.svg";
    } else {
        menu.src="./favicon_io/icon/menu.svg";
    }
})