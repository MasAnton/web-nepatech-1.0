// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//emailJs
let sendButton = document.getElementById("sendButton");
let loadingIcon = document.getElementById("loadingIcon");
let sendButtonDone = document.getElementById("sendButtonDone");

function sendMail() {
  sendButton.style.display = "none";
  loadingIcon.style.display = "block";

  let params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_bzfics8", "template_ystb56g", params)
    .then(function (res) {
      loadingIcon.style.display = "none";
      sendButtonDone.style.display = "block";
      alert("Email Dikirim");
    });
}
// email_JsEnd

const carouselItems = document.querySelectorAll(".carousel-item");
const carouselNavItems = document.querySelectorAll(".carousel-navigation-item");

let currentIndex = 0;

setInterval(() => {
  carouselItems[currentIndex].classList.remove("opacity-100");
  carouselItems[currentIndex].classList.add("opacity-0");
  carouselNavItems[currentIndex].classList.remove("bg-white");
  carouselNavItems[currentIndex].classList.add("bg-gray-500");

  currentIndex = (currentIndex + 1) % carouselItems.length;

  carouselItems[currentIndex].classList.remove("opacity-0");
  carouselItems[currentIndex].classList.add("opacity-100");
  carouselNavItems[currentIndex].classList.remove("bg-gray-500");
  carouselNavItems[currentIndex].classList.add("bg-white");
}, 5000);

// swiperJs
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
