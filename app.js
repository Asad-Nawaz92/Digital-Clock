function setCurrentDay() {
  var getDay = document.getElementById("day");
  var currentDate = new Date();
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDay = daysOfWeek[currentDate.getDay()];

  getDay.textContent = currentDay;
}

setCurrentDay();

function currentTime() {
  var getSeconds = document.getElementById("secs");
  var getMinutes = document.getElementById("mins");
  var getHours = document.getElementById("hrs");

  var currentDate = new Date();

  var seconds = currentDate.getSeconds();
  var minutes = currentDate.getMinutes();
  var hours = currentDate.getHours();

  if (seconds < 10) {
    getSeconds.innerHTML = ": 0" + seconds;
  } else {
    getSeconds.innerHTML = ": " + seconds;
  }

  if (minutes < 10) {
    getMinutes.innerHTML = ": 0" + minutes;
  } else {
    getMinutes.innerHTML = ": " + minutes;
  }

  if (hours < 10) {
    getHours.innerHTML = "0" + hours;
  } else {
    getHours.innerHTML = hours;
  }
}

setInterval(currentTime, 1000);
currentTime();
