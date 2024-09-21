// script.js

function searchRoute() {
    const input = document.getElementById('route-search').value;
    if (input) {
        alert('Searching route: ' + input);
    } else {
        alert('Please enter a starting point.');
    }
}
