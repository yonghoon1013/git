const headerOn = document.querySelector('.header'),
    ham = document.querySelector('.hammenu'),
    hamDrop = document.querySelector('.ham-drop-box'),
    fi = document.querySelector('.ham > span:nth-of-type(1)'),
    se = document.querySelector('.ham > span:nth-of-type(2)'),
    th = document.querySelector('.ham > span:nth-of-type(3)');


function on(){
    if(headerOn.className.includes('on')){
        headerOn.classList.remove('on');
        fi.style = 'top: 0%';
        se.style = 'top: 50%';
        th.style = 'top: 100%';
        $('.ham-drop-box').slideToggle();
    } else{
        headerOn.classList.add('on');
        fi.style.cssText = 'top: 50%; transform: rotate(45deg)';
        se.style = 'opacity: 0;';
        th.style.cssText = 'top: 50%; transform: rotate(-45deg)';
        $('.ham-drop-box').slideToggle();
    }
}



ham.addEventListener('click',on);





