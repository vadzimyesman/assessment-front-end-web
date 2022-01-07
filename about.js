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

	alert("You are so nice for petting the cat!")
}

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover',giveACompliment)