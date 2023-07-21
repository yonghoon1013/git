const topBtn = document.querySelector('.scroll-top');
function scroll(){

  window.scrollTo({ top: 0, behavior: 'smooth'});  
}

function scroll2(){
  
  let y = pageYOffset; //scrollY
  if(y < 160){
    topBtn.classList.add('none');
  } else{
    topBtn.classList.remove('none');
  }

}

topBtn.addEventListener('click',scroll);
window.addEventListener('scroll',scroll2);
