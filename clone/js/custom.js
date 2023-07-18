var swiper = new Swiper('.first-swiper', {
  loop: true,
  slidesPerView: 3,

  spaceBetween: 30,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    1024:{
      slidesPerView: 3,
      spaceBetween: 100,
    }
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



const bgImg = document.querySelector('.deco-only-pc');


function bgScroll(){
  let y = pageYOffset/4;
  bgImg.style = `left:${y}px`
}


window.addEventListener('scroll',bgScroll);


