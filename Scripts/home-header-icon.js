let menu = document.querySelector("#nav-list")
let menuBtn = document.querySelector("#list-icon")
let menuBtnIcon = document.querySelector("#btn-1-2")

menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})