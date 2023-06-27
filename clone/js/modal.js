const modalImg = document.querySelector('.modal-img'),
        modalText = document.querySelector('.modal-title'),
        imgTxt = document.querySelectorAll('.screen2 span'),
        modal = document.querySelector('.modal'),
        img = document.querySelectorAll('.img-box2 figure'),
        img2 = document.querySelectorAll('.img-box2 img'),
        modalClose = document.querySelector('.modal-close');


        img.forEach(function(ele,k){
            ele.onclick = function(){
                modal.style = 'display:block';

                let imgSrc = img2[k].src,
                    imgInTxt = imgTxt[k].innerText;
                    
                    modalImg.src = imgSrc;
                    modalText.innerText = imgInTxt;
            }
        });

    
    modalClose.onclick = function(){
        modal.style.display = 'none';
    }


