const movie = document.getElementById('movie');
const movieList = document.getElementById('movie-list');

let count = document.getElementById('count');
let totalPrice = document.getElementById('total');
const seats = document.querySelectorAll('.seat:not(.occupied):not(.selected)');

function handleClick() {
	if (!this.classList.contains('selected')) {
		this.classList.add('selected');
		count.innerText = +count.innerText + 1;
		// Additional actions or logic here
		totalPrice.innerText = +totalPrice.innerText + +movie.value;
		console.log(movie.value);
		console.log(totalPrice);
	} else {
		this.classList.remove('selected');
		count.innerText = +count.innerText - 1;
		totalPrice.innerText = +totalPrice.innerText - +movie.value;
	}
}

seats.forEach((seat) => {
	seat.addEventListener('click', handleClick);
});
movie.addEventListener('change', (e) => {
	totalPrice.innerText = +count.innerText * +movie.value;
});
