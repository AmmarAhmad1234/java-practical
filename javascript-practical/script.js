let itemslist = [
    {
        ProductImg:`<img src="low-angle-white-modern-car-outdoors.jpg" class="card-img-top" alt="">`,
        ProductName:"Toyata Hilux",
        ProductDesc:"Low angle white modern car outdoors",
        ProductPrice:"$45000",
        ProductRating:`<i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-regular fa-star" style="color: #FFD43B;"></i>`

    },
    {
        ProductImg: `<img src="white-offroader-jeep-parking.jpg" class="card-img-top" alt=""></img>`,
        ProductName:"Glory",
        ProductDesc:"A white offroader jeep in the parking",
        ProductPrice:"$42000",
        ProductRating:`  <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
        <i class="fa-regular fa-star" style="color: #FFD43B;"></i>`

    },
    {
        ProductImg:`<img src="sports-car-driving-asphalt-road-night-generative-ai.jpg" class="card-img-top" alt="">`,
        ProductName:"Sports Car",
        ProductDesc: "Sports car driving on asphalt road at night",
        ProductPrice:"$32000",
        ProductRating:` <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>`

    },
    {
        ProductImg:`<img src="3d-car-with-vibrant-colors.jpg" class="card-img-top" alt="">`,
        ProductName:"lamborghini",
        ProductDesc:"3d car with vibrant colors",
        ProductPrice:"$55000",
        ProductRating:` <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-regular fa-star" style="color: #FFD43B;"></i>`

    },
]

let items = document.querySelector("#products")

for (let i = 0; i < itemslist.length; i++) {
    items.innerHTML += `<div class="card" style="width: 18rem;">
   <div>${itemslist[i].ProductImg}</div>
    <div class="card-body">
      <h5 class="card-title">${itemslist[i].ProductName}</h5> 
      <p class="card-text">${itemslist[i].ProductDesc}</p>
      <div>${itemslist[i].ProductRating}</div>
      <a href="#" class="btn btn-primary mt-2">Buy Now</a>
    </div>
  </div>`
}
