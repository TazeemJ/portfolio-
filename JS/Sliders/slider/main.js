// let slider = document.querySelectorAll("#sliders")[0];
// let sliders = document.querySelectorAll(".slider");
// console.log(slider)
// let btns = document.querySelectorAll("button");
// let sliderIndex = 0;
// sliders[sliderIndex].classList.add("active");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     sliders[sliderIndex].style.transform = `translateX(${-sliderIndex*100}%)`;
//     sliders[sliderIndex].removeAttribute("style");
//       if (btn.innerHTML === "Prev") {
//           sliders[sliderIndex].classList.remove("active");
//           if (sliderIndex == 0) {
//               sliderIndex = sliders.length - 1;
//             } else {
//               sliderIndex -= 1;
//             }
//             sliders[sliderIndex].classList.add("active");
            
//             sliders[sliderIndex].style.transform = `translateX(${-sliderIndex*100}%)`;
//           } else if (btn.innerHTML === "Next") {
//           sliders[sliderIndex].style.transform = `translateX(${-sliderIndex*100}%)`;
//             sliders[sliderIndex].removeAttribute("style");
//       sliders[sliderIndex].classList.remove("active");
//       if (sliderIndex == sliders.length - 1) {
//         sliderIndex = 0;
//       } else {
//         sliderIndex += 1;
//       }
//       sliders[sliderIndex].classList.add("active");
//       sliders[sliderIndex].style.transform = `translateX(${-sliderIndex*100}%)`;
//     }
//   });
// });
