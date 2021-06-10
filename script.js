const ProductApi =
  "https://afternoon-falls-30227.herokuapp.com/api/v1/products/";
const Api = "https://afternoon-falls-30227.herokuapp.com/api/v1/products/";

let index=0;// this index is used to give name to the local storage to retreive the right data
//getting data from api
const xhr = new XMLHttpRequest();
xhr.open("Get", ProductApi);
xhr.send();
xhr.onload = function () {
  if (xhr.status == 200) {
    const product = JSON.parse(xhr.response).data;
    window.localStorage.setItem('user',JSON.stringify(product));
    console.log(product);

    let cards = ``;
    let count = 1;//count to retrieve the correct product that been choosen by th user and using it the clickHandler method so i can retrieve it form the id 
//adding card html elements to the home.html page
    product.forEach((products) => {
      cards += `
<div class="col-lg-4 col-md-6"  >
  <div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3 bg-secondary text-white">
      <h4 class="my-0 fw-normal">${products.Name}</h4>
    </div>
    <div class="card-body bodyOfCard" id="${count}" onclick="{clickHandler(this)}">
      <img src="${products.ProductPicUrl}" class="img-card" />
      <div class="footer text-end">
        <p>${products.Price}$</p>
        <a class="card-link text-end"><i class="fas fa-cart-plus"></i></a>
      </div>
    </div>
  </div>
</div>

      `;
      count++;
    });
    document.getElementById("row1").innerHTML = cards;
  } else {
    console.log("something went wrong");
  }
};
function setx(x) {
  window.test = x;
}
var lolo;
//handling the click of the user by using the count to retrieve the write product then creating the new page
function clickHandler(x) {
 

  let count = 0;
  let imgUrl;
  let name;
  let description;
  let price;
  let availability;
  let quantity;
  
  const product = JSON.parse(xhr.response).data;
  product.forEach((e) => {
    if (count < x.id) {
      imgUrl = e.ProductPicUrl;
      name = e.Name;
      description = e.Description;
      price = e.Price;
      availability = e.Status;
      quantity = e.Quantity;
    }

    count++;
  });
  

  
//creating new page for the product with the values of the card been clicked



  window.open("./product.html", "product").document.write(`<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href="./css/style.css" rel="stylesheet" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link href="./css/all.css" rel="stylesheet" />
    <link rel="icon" href="./css/images/favicon.ico" />
    <link rel="manifest" href="/site.webmanifest" />
       <title>M.market</title>
   </head>
   <body>
   <div class="header bg-secondary ">
   <div class="container">
     <header class="d-flex justify-content-center py-3">
       <a href="index.html"
         ><img src="./css/images/favicon-32x32 (1).png"
       /></a>
       <ul class="nav nav-pills">
         <li class="nav-item" id="1">
           <a
             href="index.html"
             class="nav-link text-light"
             aria-current="page"
             >Home</a
           >
         </li>
         <li class="nav-item">
           <a href="./about.html" class="nav-link text-light">About</a>
         </li>
         <li class="nav-item">
           <a href="contactus.html" class="nav-link text-light"
             >Contact Us</a
           >
         </li>
       </ul>
     </header>
   </div>
 </div>
       <div class="product-section ">
           <div class="container" id="c">
               <div class="row" id="row-product">
                   <div class="col-lg-6 mr-2 left" >
                       <img id=${imgUrl} class="product-img" src="${imgUrl}">
                       
                   </div>
                   <div class="col-lg-6 mr-2" id="right">
                      
                       <p class="product-name"  id="${name}">${name}</p>
                       <p class="product-description" id="${description}">${description}</p>                   
                       <div class="card mb-4 rounded-3 shadow-sm">
                           <div class="card-header py-3">
                              <p>Availability :<p class="availability" id="${availability}"> ${availability}</p></p>
                           </div>
                           <div class="card-body">
                                <p class="product-price" id="${price}">${price}$</p>
                            <div class="input-group mb-3">
                                <input type="number" class="quantity form-control" id="${quantity}" placeholder="Quanitity available: ${quantity}" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            </div>
                                <button type="button" class="btn btn-outline-secondary" id="${++index}" onclick="{clickHandler(this)}">Add to cart</button>

                              
                           </div>
                         </div>
                   </div>
               </div>
   
           </div>
       </div>
       <script
       src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
       integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
       crossorigin="anonymous"
     ></script>
     <script
       src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
       integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
       crossorigin="anonymous"
     ></script>
     <script src="./script-product.js"></script>
           
     
     
    
   </body>
   </html>`
   );
   
   
  

}





