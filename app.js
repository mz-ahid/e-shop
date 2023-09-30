var row = document.getElementById("row");
var productData = [
  {
    title: "Set of 3 Piece",
    des: "Glassware Bowl With Air Tight Closing Lid Material: Glass & Plastic.",
    price: "Rs. 1,000",
    imgURL:
      "https://static-01.daraz.pk/p/9995f23aaf0cea1203d1789f00a4dae0.jpg_300x0q75.webp",
  },
  {
    title: "Garbage Plate",
    des: "10 Pcs Multi-function Spit Bone Dish Household Food Grade Plastic.",
    price: "Rs. 600",
    imgURL:
      "https://pk-live-21.slatic.net/kf/S1c7d65165ee14c149d0884762b9236c4a.jpg_300x0q75.webp",
  },
  {
    title: "Mini Sauce",
    des: "6 Melamine Mini Sauce Bowls 2.5 inch Double Glazed Melamine Dip Sauce Bowl 2.5 inch.",
    price: "Rs. 500",
    imgURL:
      "https://static-01.daraz.pk/p/8df421a24d550fa6cd01ca89d1a6ecf8.jpg_300x0q75.webp",
  },
  {
    title: "Bowls & Glass",
    des: "Fancy Bowls & Glass 8 Pieces set contain 4 glass and 4 bowls imported quality",
    price: "Rs. 300",
    imgURL:
      "https://static-01.daraz.pk/p/32cd976a4b77fbb65f5b62b8ee5518ae.jpg_300x0q75.webp",
  },
  {
    title: "Indian thaali",
    des: "Stainless steel 3 in 1 Indian thaali partition tray heavy quality imported burger tray plate thali.",
    price: "Rs. 590",
    imgURL:
      "https://static-01.daraz.pk/p/ebd45d102c569c714706d2fa2da3cade.jpg_300x0q75.webp",
  },
  {
    title: "Dinner Plates",
    des: "Transparent Glassware Dinner Plates-6 Pcs Set -Saalan (23cm Dish).",
    price: "Rs. 1,200",
    imgURL:
      "https://static-01.daraz.pk/p/85e3e6acfe2b966f92588adf5b9ffc5b.jpg_300x0q75.webp",
  },
  {
    title: "Portion Plate",
    des: "Portion Plate - 3 Portion Restaurant Style Serving Plate.",
    price: "Rs. 550",
    imgURL:
      "https://static-01.daraz.pk/p/5ab2387229dbb8c51fc2ed9ee8397dd7.jpg_300x0q75.webp",
  },
  {
    title: "Steel Bowl",
    des: "Stainless Steel Bowl 11 cm Small Mini Bowls with 4 Tea Spoon Set 4 Pcs.",
    price: "Rs. 630",
    imgURL:
      "https://static-01.daraz.pk/p/38fbc07032b2926658c23b5c4dc7c052.jpg_300x0q75.webp",
  },
  {
    title: "Furite and Salad",
    des: "Melamine Leaf Colorfull For Serving Furite and Salad Pack of 2.",
    price: "Rs. 380",
    imgURL:
      "https://pk-live-21.slatic.net/kf/Sa77f587e2bfd47259e0bcb7edb9e34b32.jpg_300x0q75.webp",
  },
];
function render() {
  row.innerHTML = "";

  for (var i = 0; i < productData.length; i++) {
    row.innerHTML += ` <div class="col-md-4">
    <div class="p-2 rounded shadow-lg border">
      <div>
        <img
          src="${productData[i].imgURL}"
          width="100%"
          alt=""
        />
      </div>
      <div>
        <h1>${productData[i].title}</h1>
      </div>
      <hr />
      <div>
        <p>
        ${productData[i].des}
        </p>
      </div>
      <div class="text-end">
        <button class="btn btn-dark py-2 px-5" onclick="addToCart(${i})">${productData[i].price} Add To Cart</button>
      </div>
    </div>
  </div>`;
  }
}
render();

var arr=[]

window.addToCart=function(index){
var itemData=productData[index]
arr.push(itemData)

localStorage.setItem('classData',JSON.stringify(arr))

}

function getLocalItems(){
  var productData=JSON.parse(localStorage.getItem('classData'))
  console.log(productData);
}
getLocalItems()





