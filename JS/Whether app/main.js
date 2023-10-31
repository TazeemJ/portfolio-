
let Arr = [];



let search = document.querySelector("#search")
let btn = document.querySelector("#btnS")
let w_icon = document.querySelector(".w-icon")
let w_tem = document.querySelector(".w-tem")
let w_con = document.querySelector(".w-con")
let w_title = document.querySelector(".w-title")
let card = document.querySelector(".card")
console.log(card)
btn.addEventListener("click",function(e){
    e.preventDefault()
    fetch(`http://api.weatherapi.com/v1/current.json?key=30ac7fe460934a35be2105535233108&q=${search.value}&aqi=no`)

.then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    Arr[0]= data
    w_tem.innerHTML=Arr[0].current.temp_c + "<span>deg<span/>"
    w_title.innerHTML=`Whether ${search.value}`
     w_icon.innerHTML=` <img src=${Arr[0].current.condition.icon} alt="">`
     w_con.innerHTML = 'Today is ' +  Arr[0].current.condition.text + " and Wind " +
     Arr[0].current.wind_kph + "kph and Direction " + Arr[0].current.wind_dir 
     localStorage.setItem('whether',JSON.stringify(Arr)) 

  })
  
})
let Arrl=JSON.parse(localStorage.getItem("whether"))

w_tem.innerHTML=Arrl[0].current.temp_c + "deg"
w_title.innerHTML="Weather " + Arrl[0].location.name
 w_icon.innerHTML=`
 <img src=${Arrl[0].current.condition.icon} alt="">
 `
 w_con.innerHTML = 'Today is ' +  Arrl[0].current.condition.text + " and Wind " +
 Arrl[0].current.wind_kph + "kph and Direction " + Arrl[0].current.wind_dir 
