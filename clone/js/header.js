const headerOn = document.querySelector('.header'),
    ham = document.querySelector('.hammenu'),
    hamDrop = document.querySelector('.ham-drop-box'),
    mo = document.querySelectorAll('.ham-drop > li > a'),
    mo2 = document.querySelectorAll('.ham-drop > li > ul'),
    fi = document.querySelector('.ham > span:nth-of-type(1)'),
    se = document.querySelector('.ham > span:nth-of-type(2)'),
    th = document.querySelector('.ham > span:nth-of-type(3)');


function on(){
    headerOn.classList.toggle('on');
    if(headerOn.className.includes('on')){
        fi.style.cssText = 'top: 50%; transform: rotate(45deg)';
        se.style = 'opacity: 0;';
        th.style.cssText = 'top: 50%; transform: rotate(-45deg)';
        $('.ham-drop-box').slideToggle();
    } else{
        fi.style = 'top: 0%';
        se.style = 'top: 50%';
        th.style = 'top: 100%';
        $('.ham-drop-box').slideToggle();
    }  
}


// foreach문 이용해서 햄드랍 안에있는 li클릭시에 on클래스 추가하고 슬라이드토글 대충 ㅇㅋ?


let num = 0;

    mo.forEach(function(e,k){
        e.onclick = function(){

            

            if(this.classList.contains('on')){
                mo[num].classList.remove('on');
                $(mo2).stop().slideUp();
            }else{
            mo[num].classList.remove('on');
            this.classList.add('on');
            num = k;
            $(mo2).stop().slideUp().eq(k).slideToggle();
            }

        }
    })



ham.addEventListener('click',on);

