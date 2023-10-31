// let c =  document.getElementsByTagName("svg")
// window.addEventListener("DOMContentLoaded", function (e) {
//   const lightModeBtn = document.getElementById("lightModeBtn");
//   const darkModeBtn = document.getElementById("darkModeBtn");
//   localStorage.setItem("theme","dark")
  let homeSign = document.getElementById("homeSign");
  homeSign.onclick = function () {
    let loginA = document.createElement("a");
    loginA.setAttribute("href", "form.html");
    loginA.click();
  };

//   function darkTheme(){
//     document.getElementsByTagName("body")[0].style.background=" rgb(15, 23, 42)"
//     document.getElementById("header").style.background="rgb(15,23, 42"
//    document.getElementById("cart").lastElementChild.style.color="black"
   
   
//   }
//   function lightTheme(){
//     document.getElementsByTagName("body")[0].style.background="White"
//     document.getElementById("header").style.background="white"
//     document.getElementsByName("svg").forEach(function (item) {
//       item.style.color="black"
// x    })
  
  
// }

//   // Check the value of localStorage.getItem("theme")
//   if (localStorage.getItem("theme") === "light") {
//     lightModeBtn.classList.add("d-none");
//     darkModeBtn.classList.remove("d-none");
    
//   }else{
//     lightModeBtn.classList.remove("d-none");
//     darkModeBtn.classList.add("d-none");


//   } 
//   lightModeBtn.addEventListener("click", function () {
//     localStorage.setItem("theme", "dark");
//     lightTheme()
//     lightModeBtn.classList.add("d-none");
//     darkModeBtn.classList.remove("d-none");
    
//   });
  
//   darkModeBtn.addEventListener("click", function () {
//     localStorage.setItem("theme", "light");
//     lightModeBtn.classList.remove("d-none");
//     darkModeBtn.classList.add("d-none");
//     darkTheme()
    
//   });
// });


let icons=document.getElementsByClassName("left-icons")[0].querySelectorAll("svg")
icons[0].addEventListener("click", function () {
  icons[0].classList.add("d-none");
  icons[1].classList.remove("d-none");
  icons[1].style.color = "#e31b23";
});
icons[1].addEventListener("click", function () {
  icons[1].classList.add("d-none");
  icons[0].classList.remove("d-none");
});
icons[2].addEventListener("click", function () {
  icons[2].classList.add("d-none");
  icons[3].classList.remove("d-none");
  icons[3].style.color = "#e31b23";
});
icons[3].addEventListener("click", function () {
  icons[3].classList.add("d-none");
  icons[2].classList.remove("d-none");
});
icons[4].addEventListener("click", function () {
  icons[4].classList.add("d-none");
  icons[5].classList.remove("d-none");
});
icons[5].addEventListener("click", function () {
  icons[5].classList.add("d-none");
  icons[4].classList.remove("d-none");
});










let cartDiv = document.getElementById("cartDiv");
let cart = document.getElementById("cart");
cart.addEventListener("mouseenter", function () {
  cartDiv.style.display = "Block";
});
setInterval(function () {
  cart.addEventListener("mouseout", function () {
    cartDiv.style.display = "none";
  });
}, 1000);

let newset_content = newest.querySelectorAll(".newest-content");
let newsetButton = newest.querySelector("button");
newsetButton.onclick = function () {
  let A = document.createElement("a");
  console.log(A);
  A.setAttribute("href", "SeeProduct.html");
  A.click();
};
newset_content.forEach(function (nContent, index) {
  nContent.addEventListener("click", function () {
    let ncontent_img = nContent.querySelector("img").getAttribute("src");
    let obj = [];
    if (index == 0) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Fd6cc0c287f7ee7a58d03f293aa50370d36823273-530x470.webp%3Ffit%3Dmax%26auto%3Dformat&w=96&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F75d5dd54f87e98dc38110dd03f70fe121430ee29-530x470.webp%3Ffit%3Dmax%26auto%3Dformat&w=96&q=75",
        ],
      });
    }
    if (index == 1) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F4d7a22df76b3b51debbe321da375272a790f9ed7-530x470.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F95357a1a93e7ab50f6b7a97be334e06353996955-530x470.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Ffecd1572570fc5f57a6fd36e36671376c0e47556-600x532.webp%3Ffit%3Dmax%26auto%3Dformat&w=96&q=75",
        ],
      });
    }

    if (index == 2) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Fa88ab53a527c434d07b7b418e0993b31f405695c-600x532.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Fb10f564e5ebbd4bb8e6dd1d3f7c834636ffdfca2-600x532.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Ff792323db3a67f34bdb8205a8ab98b2ee7b8294b-530x470.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
        ],
      });
    }

    if (index == 3) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F0072c2eb21e7024053cb59a68b89b2afb603e35f-500x500.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F542b01876021f9339e6af9f4a4e3d62ab983ecc6-500x500.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Ff8c73fd114a96c27265fd68612e69d2613c7b300-500x500.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
        ],
      });
    }

    if (index == 4) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Fa6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
        ],
      });
    }
    if (index == 4) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Fffc858fc182553bee2aaff34fe728bf07d15f2b5-278x296.png%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F678c1dd51d26380191c9eef7f59e852522491f78-134x143.png%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F1ddb566e73b9bc57c94e66196f6c2d818f894668-134x143.png%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
        ],
      });
    }
    if (index == 5) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Fffc858fc182553bee2aaff34fe728bf07d15f2b5-278x296.png%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F678c1dd51d26380191c9eef7f59e852522491f78-134x143.png%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F678c1dd51d26380191c9eef7f59e852522491f78-134x143.png%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
        ],
      });
    }
    if (index == 6) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F0072c2eb21e7024053cb59a68b89b2afb603e35f-500x500.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F542b01876021f9339e6af9f4a4e3d62ab983ecc6-500x500.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Ff8c73fd114a96c27265fd68612e69d2613c7b300-500x500.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
        ],
      });
    }
    if (index == 7) {
      obj.push({
        img: ncontent_img,
        img_url: [
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F4d7a22df76b3b51debbe321da375272a790f9ed7-530x470.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2F95357a1a93e7ab50f6b7a97be334e06353996955-530x470.webp%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75",
          "https://ecommernce-store.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwci92bk4%2Fproduction%2Ffecd1572570fc5f57a6fd36e36671376c0e47556-600x532.webp%3Ffit%3Dmax%26auto%3Dformat&w=96&q=75",
        ],
      });
    }

    localStorage.setItem("Product", JSON.stringify(obj));
    let A = document.createElement("a");
    A.setAttribute("href", "sumsung.html");
    A.click();
  });
});

// offer time set code
let sec = document.querySelectorAll("#sec");
let mins = document.querySelectorAll("#min");
let a = 60;

setInterval(function () {
  a--;
  sec.forEach(function (s) {
    s.innerHTML = `${a}`;
  });
  if (a == 0) {
    a = 60;
  }
}, 1000);
let b = 48;

setInterval(function () {
  b--;
  mins.forEach(function (m) {
    m.innerHTML = `${b}`;
  });
  if (b == 0) {
    b = 48;
  }
}, 60000);

//*=============== hoverImg function

function hoverImg(items) {
  items.forEach(function (item, index) {
    item.addEventListener("mouseenter", function () {
      item.style.scale = "0.9";
      item.style.transition = "0.8s";
    });
    item.addEventListener("mouseout", function () {
      item.style.scale = "1";
    });
  });
}
//*=============== newest hover

let ourImg = document.querySelectorAll(".ourCatageriys-content img");
ourImgHover(ourImg);
function ourImgHover(items) {
  items.forEach(function (item, index) {
    item.addEventListener("mouseenter", function () {
      item.style.scale = "0.9";
      item.style.transition = "0.4s";
    });
    item.addEventListener("mouseout", function () {
      item.style.scale = "1";
    });
  });
}

//*=============== newest

let newsetImg = document.querySelectorAll(".newest-image img");
let newsetIcon = document.querySelectorAll(".left-icons");
let offersImg = document.querySelectorAll(".offer-img img");
hoverImg(offersImg);
hoverImg(newsetImg);
