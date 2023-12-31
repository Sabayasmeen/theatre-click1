const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


let ticketPrice = +movieSelect.value;

// update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
console.log(selectedSeatsCount);
}

container.addEventListener('click', (e) => {
    if(e.target.classlist.contains('seat') && !e.target.classlist.contains('occupied')) {
        e.target.classlist.toggle('selected');
    }

    updateSelectedCount();
});
