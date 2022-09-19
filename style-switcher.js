/* =============================== toggle style switcher ======================= */
/*const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=> {
    document.querySelector(".style-switcher").classList.toggle("open");
})*/

const dn=document.querySelector(".day-night");
dn.addEventListener("click",()=>{
    dn.querySelector("i").classList.toggle("fa-sun");
    dn.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
if(document.body.classList.contains("dark")){
    dn.querySelector("i").classList.add("fa-sun");
}
else{
    dn.querySelector("i").classList.add("fa-moon");
}
})