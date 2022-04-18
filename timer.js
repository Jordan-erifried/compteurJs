const departMinutes = 5;
var temps = departMinutes * 60;

const timerElement = document.getElementById("timer");

setInterval(() => {
    var minutes = parseInt(temps / 60, 10);
    var secondes = parseInt(temps % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    timerElement.innerText = `${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
}, 1000);