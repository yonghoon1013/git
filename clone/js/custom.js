let ww = window.innerWidth;

new Swiper('.first-swiper', {
  loop: true,
  slidesPerView: 3,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

function responsiveSwiper() {
  if(ww<480){
    new Swiper('.first-swiper', {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
    })
  }else{
    
  }
}

responsiveSwiper();





// new Swiper('.second-swiper', {
//   direction: 'vertical',
//   autoplay: true,
//   loop: true
// });




const topBtn = document.querySelector('.scroll-top');
function scroll(){
  window.scrollTo({ top: 0, behavior: 'smooth'});  
}


topBtn.addEventListener('click',scroll);


