const button = document.querySelector(".catalog-menu");
const content = document.querySelector(".catalog-list");
const arrow = document.querySelector(".arrow") 
console.log(button);

button.addEventListener('click', function(){
    arrow.style.transition = "0.5s";
    if(content.classList.toggle("show")){
        arrow.style.transform = "rotate(90deg)";
    }
    else {
        arrow.style.transform = "rotate(0deg)";
    }

});
