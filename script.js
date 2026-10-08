let hou = document.getElementById("hou");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  let hours = date.getHours();
  console.log(hours);
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hourAngle = 30 * hours + minutes * 0.5;
  let minuteAngle = minutes * 6;
  let secodeAngle = seconds * 6;

  hou.style.transform = `rotate(${hourAngle}deg)`;
  min.style.transform = `rotate(${minuteAngle}deg)`;
  sec.style.transform = `rotate(${secodeAngle}deg)`;
}

setInterval(displayTime, 1000);
