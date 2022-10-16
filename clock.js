let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hour = document.getElementById('hour');


setInterval(() => {
    var D = new Date();

    var Hour = D.getHours();
    var Min = D.getMinutes();
    var Sec = D.getSeconds();

    let totalHours = (30 * Hour) + (Min / 2);
    let totalMin = (6 * Min) + (Sec / 10);
    let totalSec = 6 * Sec;

    hour.style.transform = `rotate(${totalHours}deg)`;
    min.style.transform = `rotate(${totalMin}deg)`;
    sec.style.transform = `rotate(${totalSec}deg)`;

}, 1000);
