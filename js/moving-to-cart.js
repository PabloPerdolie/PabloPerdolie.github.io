const cart = document.querySelector(".cart-wrapper");
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const result = document.querySelector('.result');

var resPrice = parseInt("0");
console.log(cartStorage)
if(cartStorage.length){
    cartStorage.forEach(element => {
        const {title, price} = element;
        const newCard = document.createElement("div");
        resPrice = resPrice + parseInt(price);
        newCard.innerHTML = `
        <div class="cart-card">
            <h3>${title}</h3>
            <h5>${price} руб.</h5>
            <a class="delete-from-cart">удалить</a>
        </div>`;
        newCard.className = "cart-table";
        cart.appendChild(newCard);
        

    });

    const cards = document.querySelectorAll(".cart-table");

    cards.forEach((el, index) => {
        console.dir(el);
        const btn = el.childNodes[1].childNodes[5];
        const title = el.childNodes[1].childNodes[1].innerText;
        const price = parseInt(el.childNodes[1].childNodes[3]);
        btn.addEventListener('click', ()=>{
            var items = JSON.parse(localStorage.getItem("cart"));
            var i = 0;
            JSON.parse(localStorage.getItem("cart")).every((item) => {
                if(item['title'] == title){
                    items.splice(i, 1);
                    resPrice -= parseInt(item['price']);
                    return false;
                }
                else {
                    i++;
                    return true;
                }
            });
            localStorage.setItem("cart", JSON.stringify([...items]));
            location.reload();
        });
    })
    
    const newCard = document.createElement("div");
    newCard.innerHTML = `<h3>Итого:</h3>
    <h5>${resPrice} руб.</h5>`;
    newCard.className = "result-price";
    result.appendChild(newCard);

}
else {
    const newcard = document.createElement("div")
    newcard.innerHTML = `<div>Корзина пуста</div>`
    newcard.className = "empty-cart"
    result.appendChild(newcard)
}