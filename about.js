console.log("hello world");

let form = document.querySelector('form#contact');
let picture = document.querySelector('img')


function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("The form has been submitted successfully.")
}

function giveACompliment(evt) {
	evt.preventDefault();

	alert("You are so kind since you pat the cat!")
}

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover',giveACompliment)