const tool = document.querySelectorAll('.tool-point'),
        toolBox = document.querySelectorAll('.tool-box');



tool.forEach(function(t,k){
    t.onmouseover = function(){
        toolBox[k].classList.add('on');
    }
    t.onmouseout = function(){
        toolBox[k].classList.remove('on');
    }
})



const tabList = document.querySelectorAll('.tab-list > li'),
        conList = document.querySelectorAll('.con-list > li');

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

