function bubbelC() {
  document.getElementsByClassName("Bt")[0].innerHTML = ``;

  for (var i = 0; i < 220; i++) {
    var n = parseInt(Math.floor(Math.random() * 10));
    document.getElementsByClassName("Bt")[0].innerHTML += `
        <div class="bubbel">${n}</div> 
        `;
  }
}

var n = parseInt(Math.floor(Math.random() * 10));
document.getElementById("RNumber").innerHTML = n;
document
  .getElementsByClassName("Bt")[0]
  .addEventListener("click", function (e) {
    if (e.target.innerHTML >= 0 && e.target.innerHTML <= 9) {
      if (document.getElementById("RNumber").innerHTML === e.target.innerHTML) {
        incressSocre();
        bubbelC();

        var n = parseInt(Math.floor(Math.random() * 10));
        document.getElementById("RNumber").innerHTML = n;
      }
    }
  });
  function timer() {
    let time = 60;
  let timeS = setInterval(() => {
    time--;
    document.getElementById("Timer").innerHTML = time;
    if (time === 0) {
      clearInterval(timeS);
      document.getElementsByClassName(
        "Bt"
      )[0].innerHTML = ` <h2 class="h2"> Your Score is ${(document.getElementById(
        "score"
      ).innerHTML = score)} </h2>`;
      document.getElementsByTagName("button")[0].style.display="block"
    }
}, 1000);
}
document.getElementsByTagName("button")[0].addEventListener("click",function(){
    location.reload();
})

let score = 0;
function incressSocre() {
  score += 10;
  document.getElementById("score").innerHTML = score;
}

bubbelC();
timer();
