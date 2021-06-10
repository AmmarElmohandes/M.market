let y = localStorage.getItem("count");
let card=``
let total=0
//retreiving all th data from the local storage
for (let i = 1; i <= y; i++) {
    
  var x = JSON.parse(window.localStorage.getItem(i));

 total+=Number(x.pricing*x.quantity)
  card +=  `<div class="row r-cart">

                       <div  class="column-cart-s col-lg-3">
                       
                           <img class="cart-img" src="${x.imgUrl}">
                           <p>${x.name}</p>
                       </div>
                       
                                             
                       <div  class="column-cart col-lg-3">                          
                           <p class="p-c">${x.pricing}$</p>
                       </div>                       
                       <div id="quantity" class="column-cart col-lg-3">
                       <div class="row">
                           <p class="p-q">${x.quantity}
                           </p>
                           
                          
                           </div>
                       </div>                       
                       <div  class="column-cart col-lg-3">
                           <p class="p-c">${x.pricing*x.quantity}$</p>
                       </div>  
                                            
                    </div> 
                    <hr class="hr-c">
             
         `
    
                    ;

                   
                    
}
    

document.getElementById("cart").innerHTML=card
document.querySelector(".total").innerHTML=`<h1>Total:</h1><p class="p-c">${total}$</p>`