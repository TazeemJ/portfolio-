let a = document.querySelector(".achor");
let span = a.querySelector("span");
let crossIcon = a.querySelector("i");
let header2 = document.querySelector(".header");
let header = document.getElementById("header");
let industries = document.getElementById("industries");

a.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior

  if (span.classList.contains("d-none")) {
    span.classList.remove("d-none");
    crossIcon.classList.add("d-none");
    header2.classList.add("d-none");
    header.classList.remove("d-none");
    industries.classList.remove("d-none");
    
  } else {
    span.classList.add("d-none");
    crossIcon.classList.remove("d-none");
    header.classList.add("d-none");
    header2.classList.remove("d-none");
    industries.classList.add("d-none");
  }
});

let p = document.querySelectorAll(".c-content a");
let ul = document.querySelectorAll(".c-content ul");
let C_content = document.querySelectorAll(".c-content");

p.forEach(function (pa, index) {
  pa.addEventListener("mouseenter", function () {
    ul[index].classList.add("activevate");
    C_content[index].addEventListener("mouseleave", function () {
      ul[index].classList.remove("activevate");
      ul[index].style.transition = ` opacity 1s, max-height 0s ease-in-out;`;
    });
  });
});

let imageA = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80",
  "https://plus.unsplash.com/premium_photo-1672947568059-23e2f914eb6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1090&q=80",
  "https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
];

let indus_content = document.querySelectorAll(".indus-content");
let indus_img = document.getElementById("industries");
for (let index = 0; index < indus_content.length; index++) {
  indus_content[index].addEventListener("mouseover", function () {
    // indus_content[index].querySelector("p").style.display="block"
    // indus_content[index].querySelector("p").style.height="0px"
    indus_content[index].querySelector("p").classList.add("activevat");
    indus_content[index].addEventListener("mouseleave", function () {
      indus_content[index].querySelector("p").classList.remove("activevat");
    });

    if (index == 0) {
      indus_content[0].style.backgroundColor = "none";
    } else {
      indus_content[index].addEventListener("mouseleave", function () {
        indus_content[index].style.backgroundColor = "";
      });
      indus_content[index].style.backgroundColor = "#f26224";
    }
    indus_img.style.background = `url("${imageA[index]}") 0 0  no-repeat`;
    indus_img.style.backgroundSize = `cover`;
    indus_img.addEventListener("mouseleave", function () {
      indus_img.style.background = `url("${imageA[0]}") 0 0  no-repeat`;
    });
  });
}


const sliderContainer = document.querySelector('.slider-container')
      const slideRight = document.querySelector('.right-slide')
      const slideLeft = document.querySelector('.left-slide')
      const upButton = document.querySelector('.up-button')
      const downButton = document.querySelector('.down-button')
      const slideLenght = slideRight.querySelectorAll('div').length
      const spans = document.querySelectorAll('.menu span')

      let activeSlideIndex = 0

      slideLeft.style.top = `-${(slideLenght - 1) * 100}vh`

      let indexM= 0;

      const changeSlide = (direction) => {
          const sliderHeight = sliderContainer.clientHeight
          if(direction === 'up') {
              activeSlideIndex++
              if(activeSlideIndex > slideLenght - 1) {
                  activeSlideIndex = 0

              }
          } else if(direction === 'down') {
              activeSlideIndex--
              if(activeSlideIndex < 0) {
                  activeSlideIndex = slideLenght - 1
              }

          }
          spans.forEach(spans => {
              spans.classList.remove("mactive")
          });
         if(indexM ===spans.length-1){
          indexM=0
      }else{
          indexM++
      }
      spans[indexM].classList.add("mactive")
          slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
          slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
      }
      setInterval(() => {
        changeSlide('up')

      }, 3000);