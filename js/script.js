var menu = document.getElementById("menu");
var actions = document.getElementById("actions");

menu.addEventListener("click" ,  ()=>{
    handleMenu();
});
function handleMenu(){
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}