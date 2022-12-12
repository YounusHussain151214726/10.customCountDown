const selectCountdown = document.getElementById("select-countdown");
const counterDiv = document.getElementById("counter");
const form = document.getElementById("form");
const start = document.getElementById("btn");
let selectDate = document.getElementById("in-date");
let selectTitle = document.getElementById("in-title");
//dom manipulate
const dey = document.getElementById("day");
const hrs = document.getElementById("hr");
const mnts = document.getElementById("mnt");
const sec = document.getElementById("sec");
const resetBtn = document.getElementById("reset");

const completeCountdown = document.getElementById("comp-countdown");

let countdownDate = "";
//interval id

let intervalID;

//title
const counterTitle = document.getElementById("Title");

let today = new Date().toISOString().split("T")[0];

selectDate.setAttribute("min", today);

console.log(today);
console.log(selectDate);

let Title;
let countdownValue = Date;

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let year = day * 365;

function updateDom() {
  intervalID = setInterval(() => {
    let timeNow = new Date().getTime();
    let distance = countdownValue - timeNow;
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    selectCountdown.hidden = true;
    counterDiv.hidden = false;
    counterTitle.textContent = Title;
    dey.textContent = `${days}`;
    hrs.textContent = `${hours}`;
    mnts.textContent = `${minutes}`;
    sec.textContent = `${seconds}`;

    // console.log(distance)

    if (distance < 0) {
      clearInterval(intervalID);
      counterDiv.hidden = true;
      selectCountdown.hidden = true;
      completeCountdown.hidden = false;
      const p = document.createElement("p");
      p.textContent = `${Title} is complete on ${selectDate}`;
      completeCountdown.append(p, resetBtn);
    }
  }, second);
}

function reset() {
  clearInterval(intervalID);

  counterTitle.textContent = "";
  selectCountdown.hidden = false;
  counterDiv.hidden = true;
  completeCountdown.hidden = true;
}

resetBtn.addEventListener("click", reset);
//reset

//updateForm
function updateForm(e) {
  e.preventDefault();
  Title = e.srcElement[0].value;
  selectDate = e.srcElement[1].value;
  console.log(countdownValue);
  if (selectDate == "") {
    alert("Select date for start countdown");
  } else {
    countdownValue = new Date(selectDate).getTime();
    updateDom();
  }
}

//addEventListner
form.addEventListener("submit", updateForm);
