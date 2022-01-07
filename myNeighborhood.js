const randomPickBtn = document.querySelector(".restaurantBtn")

const restaurants = ["Original Joe’s Westlake", "Shaking Crab", "Tasty Pot", "Boulevard Cafe"];

const randomPick = (evt)=>{

evt.preventDefault();
const random = Math.floor(Math.random() * restaurants.length);
alert(`You shoud try ${restaurants[random]} out!`);
}

randomPickBtn.addEventListener("click",randomPick)