let toggle = document.getElementById("hamburger");
let scrollBtn = document.getElementsByClassName("scroll")[0];
window.addEventListener("load",function(){
    let logo =document.getElementById("logo")
  logo.click()

})
window.addEventListener("scroll",function(){
    if (window.pageYOffset > 300){
scrollBtn.classList.add("display")

}else{

scrollBtn.classList.remove("display")

}
})
scrollBtn.addEventListener('click',()=>{
window.scrollTo({
  top:0,
  behavior:"smooth"
})
})
toggle.addEventListener("click",function(){
  toggle.classList.toggle("active");
 
})

var navLinks = document.querySelectorAll('#menu a');
var button = document.querySelector('.navbar-toggler');
var dropdownMenu = document.querySelector('.dropdown-menu');

navLinks.forEach(function(link, index) {
    link.addEventListener('click', function(event) {
        if (index === 2) { // Check if it is the third <a> tag (index 2)
            event.preventDefault(); // Prevent the default behavior of the link
            dropdownMenu.classList.add('show'); // Toggle the 'show' class on the dropdown menu
            
          } else {
            toggle.classList.toggle("active");
            button.classList.add('collapsed');
            button.setAttribute('aria-expanded', 'false');
            document.getElementById('navbarNav').classList.remove('show');

        }
    });
});


