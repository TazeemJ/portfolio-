let sectionImg1 = document.querySelector(".div-img1");
let imagA = [
  "https://soundgarden.webbuggsdev.com/wp-content/uploads/2023/05/IMG_7324.jpg",
  "https://soundgarden.webbuggsdev.com/wp-content/uploads/2023/05/IMG_8352.jpg",
];

let index = 0;
imageChange(imagA[index]);
setInterval(() => {
  if (index == 1) {
    index = 0;
  } else {
    index++;
  }
  imageChange(imagA[index]);
}, 30000);
function imageChange(url) {
  sectionImg1.style.background = `
linear-gradient(0deg, rgba(33, 25, 30, 0.3), rgba(6, 3, 5, 0.3)),
    url(${url})`;
}


// slider js

$(document).ready(function () {
  $(".discover-silder").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="custom-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="custom-next"><i class="fas fa-chevron-right"></i></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow:
            '<button type="button" class="custom-prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow:
            '<button type="button" class="custom-next"><i class="fas fa-chevron-right"></i></button>',
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow:
            '<button type="button" class="custom-prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow:
            '<button type="button" class="custom-next"><i class="fas fa-chevron-right"></i></button>',
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow:
            '<button type="button" class="custom-prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow:
            '<button type="button" class="custom-next"><i class="fas fa-chevron-right"></i></button>',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


// vidoe slider
$(document).ready(function () {
  $(".testimonils").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:false,
    nextArrow:false,
    autoplay: true,
    autoplaySpeed: 2000, 

  });
});

// vidoe slider

$(document).ready(function () {
  $(".video-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,  // Set the animation speed to 1000ms
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  // Auto play after 1000ms
    prevArrow:
      '<button type="button" class="video-btn-p"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="video-btn-n"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1016,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1000,
          prevArrow:
            '<button type="button" class="video-btn-p"><i class="fas fa-chevron-left"></i></button>',
          nextArrow:
            '<button type="button" class="video-btn-n"><i class="fas fa-chevron-right"></i></button>',
        },
      },
      {
        breakpoint: 758,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1000,
          prevArrow:
            '<button type="button" class="video-btn-p"><i class="fas fa-chevron-left"></i></button>',
          nextArrow:
            '<button type="button" class="video-btn-n"><i class="fas fa-chevron-right"></i></button>',
        },
      },
    ],
  });
});


let timer=document.querySelectorAll(".timer .time-title")

timer[0].innerHTML = 0
timer[1].innerHTML = 0
timer[2].innerHTML = 0
timer[3].innerHTML = 0
let timer1 = 0
let settime1 = setInterval(() => {
  timer1++
  if(timer1 == 89){
    
    clearInterval(settime1)
  }
  timer[0].innerHTML = timer1
}, 10);

let timer2 = 0
let settime2 = setInterval(() => {
  timer2++
  if(timer2 == 110){
    
    clearInterval(settime2)
  }
  timer[1].innerHTML = timer2
}, 10);


let timer3 = 0
let settime3 = setInterval(() => {
  
  if(timer3 >= 8952){
    
    clearInterval(timer3)
  }else{
    timer3 = timer3+44.76
  }
  
  timer[2].innerHTML = Math.floor(timer3)
}, 5);

let timer4 = 0
let settime4 = setInterval(() => {
  
 
  if(timer4 == 30){
    clearInterval(timer4)
  }else{
    timer4++ 
  }
  timer[3].innerHTML = timer4 + "k"
}, 10);


let gallery_img=document.querySelectorAll(".gallery-img")
let overlayImg=document.querySelectorAll(".overlay-img")
gallery_img.forEach(function(img,index) {
  img.addEventListener("mouseover",function(){
    overlayImg[index].style.top="0%"
    img.children[0].style.transform="translateY(-10px)"
  })
  img.addEventListener("mouseleave",function(){
    overlayImg[index].style.top="100%"
    img.children[0].style.transform="translateY(0px)"
  })
  overlayImg[index].addEventListener("mouseleave",function(){
    overlayImg[index].style.top="100%"
    img.children[0].style.transform="translateY(0px)"

  })
});




