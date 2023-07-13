var swiper = new Swiper('.first-swiper', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 100,
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











window.addEventListener('load',()=>{

  
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: $('.grid-item:first').width(),
      percentPosition: true,
      gutter: '.gutter-sizer',
      
    });
  
});

/*
function maso(){
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: $('.grid-item:first').width(),
    percentPosition: true,
    gutter: '.gutter-sizer',
    
  });
}
window.addEventListener('resize',maso);
*/
