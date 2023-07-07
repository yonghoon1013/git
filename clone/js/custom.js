var swiper = new Swiper('.first-swiper', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
})

var swiper = new Swiper(".mySwiper", { 
      direction: "vertical",
      centeredSlides: true,
      autoHeight : true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    });





const topBtn = document.querySelector('.scroll-top');
function scroll(){
  window.scrollTo({ top: 0, behavior: 'smooth'});  
}





window.addEventListener('load',()=>{

  
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: $('.grid-item:first').width(),
      percentPosition: true,
      gutter: '.gutter-sizer',
      
    });
  
});

topBtn.addEventListener('click',scroll);


