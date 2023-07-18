const tabList = document.querySelectorAll('.tab-list > li'),
    conList = document.querySelectorAll('.traffic-info');


let num = 0;

tabList[num].classList.add('on');
conList[num].classList.add('on');

tabList.forEach(function(list,k){
    list.onclick = function(){
        tabList[num].classList.remove('on');
        this.classList.add('on');

        conList[num].classList.remove('on');
        conList[k].classList.add('on');
        num = k;
    }
})