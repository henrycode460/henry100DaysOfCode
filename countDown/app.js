const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const item = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022,3,15,11,13,40);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

let day = futureDate.getDay();
day = weekdays[day];


giveaway.textContent = `Give away Ends ${day} ${month} ${date},  ${year}  ${hour}:${minute}am `


// future time in minute
const futureTime = futureDate.getTime();

function getRemainingTime (){
  const today = new Date().getTime();
  const t = futureDate - today;
   console.log(t);

  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1d = 24hrs

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000; 
  const oneminute = 60 * 1000;

  // calculate all value
  let days = t / oneDay;
  days = Math.floor(days); 

  let hours = Math.floor((t % oneDay) / onehour);

  let minutes = Math.floor((t % onehour) / oneminute);
  let seconds = Math.floor((t % oneminute) / 1000);

//  set value Array

const values = [days,hours,minutes,seconds];

function format (item){
  if(item < 10 ){
    return item = `0${item}`
  }
  return item;
}



item.forEach(function(item, index){
item.innerHTML = format(values[index]); 

});
  

}

getRemainingTime()