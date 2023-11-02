const cart = document.querySelectorAll(".scooter");
const counter = document.querySelector(".cart-image-href");
const newCnt = document.createElement('div');

const cartStorage = localStorage.getItem("cart") || "[]";
const cart1 = JSON.parse(cartStorage);
localStorage.setItem("cart", JSON.stringify([...cart1]));
newCnt.innerHTML = `<div>${JSON.parse(localStorage.getItem("cart")).length}</div>`;
newCnt.className = "counter";
counter.appendChild(newCnt);

cart.forEach((el, index) => {
    console.dir(el);
    
    const btn = el.childNodes[7];
    const title = el.childNodes[1].innerText;
    const price = el.childNodes[5].childNodes[0].innerText;


    btn.addEventListener('click' , ()=>{
        
        const card = {title, price};
        console.log(JSON.parse(localStorage.getItem("cart")).length);
        localStorage.setItem("cart", JSON.stringify([...cart1, card]));
        location.reload();
    })
});




