const place = document.getElementById("place")
const ritual = document.getElementById("ritual")
const color = document.getElementById("color")

function placeButtonAlert (evt) {
    evt.preventDefault();
    alert("My favourite place is our summer house next to the lake and the river")
}
function ritualButtonAlert (evt) {
    evt.preventDefault();
    alert("My favourite ritual is drinking a glass of water every morning")
}
function colorButtonAlert (evt) {
    evt.preventDefault();
    alert("My favourite color is black")
}

place.addEventListener("click", placeButtonAlert)
ritual.addEventListener("click",ritualButtonAlert)
color.addEventListener("click",colorButtonAlert)