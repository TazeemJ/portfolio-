let circle = document.querySelector(".circle");

var circles = document.querySelectorAll(".mncircle");

window.addEventListener("load", function () {
   circle.style.transform="translate(0%, -50%) rotate(0deg)"
   circle.style.transition="2s"
   circles[2].style.opacity = "0.5";
});
console.log(circles[2].getAttributeNames("class"));
circles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    // if (index == 0) {
    //   circle.style.transform = `translate(0%, -50%) rotate(${3-(index+1)*10}deg)`;
    //   allc()
    //   circles[index].style.opacity="0.5"
    // } else if (index == 1) {
    //     circle.style.transform = `translate(0%, -50%) rotate(10deg)`;
    //     allc()
    //     circles[index].style.opacity="0.5"
    // } else if (index == 2) {
    //     circle.style.transform = `translate(0%, -50%) rotate(0deg)`;
    //     allc()
    //     circles[index].style.opacity="0.5"

    // } else if (index == 3) {
    //     circle.style.transform = `translate(0%, -50%) rotate(-10deg)`;
    //     allc()
    //     circles[index].style.opacity="0.5"

    // } else if (index == 4) {
    //     circle.style.transform = `translate(0%, -50%) rotate(-20deg)`;
    //     allc()
    //     circles[index].style.opacity="0.5"
    
    // }
    circle.style.transform = `translate(0%, -50%) rotate(${
        (3 - (index + 1)) * 10
    }deg)`;
    allc();
    circles[index].style.opacity="0.5"
    circles[index].style.transition="0.3s"
});
});
function allc() {
  circles.forEach(function (val2) {
    val2.style.opacity = "0.1";
  });
}
console.log(eval(2 + 1));
