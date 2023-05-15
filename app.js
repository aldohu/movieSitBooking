const movie = document.getElementById('movie');
const movieList = document.getElementById('movie-list');

let count = document.getElementById('count');
let totalPrice = document.getElementById('total');
const seats = document.querySelectorAll('.seat:not(.occupied):not(.selected)');

const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];

function updateCountAndTotal() {
	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	totalPrice.innerText = selectedSeatsCount * +movie.value;
}
function saveSelectedSeats() {
	localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
}

function handleClick() {
	const seatIndex = Array.from(seats).indexOf(this);

	if (!this.classList.contains('selected')) {
		this.classList.add('selected');
		selectedSeats.push(seatIndex);
	} else {
		this.classList.remove('selected');
		selectedSeats.splice(selectedSeats.indexOf(seatIndex), 1);
	}

	saveSelectedSeats();
	updateCountAndTotal();
}

seats.forEach((seat) => {
	seat.addEventListener('click', handleClick);
});

selectedSeats.forEach((seatIndex) => {
	seats[seatIndex].classList.add('selected');
});
updateCountAndTotal();
movie.addEventListener('change', (e) => {
	totalPrice.innerText = +count.innerText * +movie.value;
});
const na = document.getElementById('N/A');

na.removeEventListener('click', handleClick);
