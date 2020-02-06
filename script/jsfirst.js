const month = ['January', 'February', 'March', 'April',
               'June', 'July', 'August', 'September', 'October',
                'November', 'December'];

const day   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday',
               'Saturday'];

let dayName = document.getElementById('day-name');
let year1   = document.getElementById('year1');
let year2   = document.getElementById('year2');
let dayDate = document.getElementById('day-date');
let mmnth   = document.getElementById('month');
let tmme    = document.getElementById('time');

let date    = new Date();
dayName.innerHTML = day[date.getDay()];
year1.innerHTML   = date.getFullYear();
year2.innerHTML   = date.getFullYear();
dayDate.innerHTML = date.getDate();

mmnth.innerHTML   = month[date.getMonth()];

let hrs = date.getHours();
let ispm= true;
if      (hrs == 0) { hrs = 12; ispm = false; }
else if (hrs < 11) { hrs += 1; ispm = false; }
else if (hrs ==11) { ispm = false; }
else if (hrs > 12) { hrs  = hrs % 12; }

let time = hrs + ': ' + date.getMinutes() + (ispm? 'pm': 'am');
tmme.innerHTML = time;
