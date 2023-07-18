const tabList = document.querySelectorAll('.tab-list > li'),
    conList = document.querySelectorAll('.traffic-info'),
    trafficHead = document.querySelector('.sub-con-box1 > h3');


let num = 0;

tabList[num].classList.add('on');
conList[num].classList.add('on');

tabList.forEach(function(list,k){
    list.onclick = function(){
        trafficHead.innerText = tabList[k].innerText;
        tabList[num].classList.remove('on');
        this.classList.add('on');

        conList[num].classList.remove('on');
        conList[k].classList.add('on');
        num = k;
    }
})