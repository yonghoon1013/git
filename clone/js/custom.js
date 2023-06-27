new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

const topBtn = document.querySelector(".scroll-top");
function scroll(){
  window.scrollTo({ top: 0, behavior: "smooth" });  
}


document.querySelector(".scroll-top").addEventListener("click",scroll);


