const topBtn = document.querySelector('.scroll-top');
function scroll(){
  window.scrollTo({ top: 0, behavior: 'smooth'});  
}

topBtn.addEventListener('click',scroll);


