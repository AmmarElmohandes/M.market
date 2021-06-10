


function clickHandler(x){
    let userQuantity=document.querySelector(".quantity").value
    let quantity=document.querySelector(".quantity").id
   

    if (userQuantity-1 > quantity-1) {
        alert("choose less items")
    }
   else{
    let product={
        name:document.querySelector(".product-name").id,
        imgUrl:document.querySelector(".product-img").id,
        pricing:document.querySelector(".product-price").id,
        quantity:document.querySelector(".quantity").value
        }
        //setting the object to the local storage 
    window.localStorage.setItem("count",x.id);
    window.localStorage.setItem(x.id, JSON.stringify(product));
    window.location.href="cart.html"
    
}
   

}