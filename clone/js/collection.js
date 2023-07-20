

function colClick(){
    let colStorageNum =  localStorage.getItem("num");

    fetch('./json/data.json')
    .then(res => { return res.json()}) // 한줄일땐 (),{]생략가능 근데 {}쓸땐 return시켜줘야함 안쓰면 필없
    .then(data => {

        // 메인 소장유물 클릭시 유물 타이틀 정보 불러오기
        const collTitleBox = document.querySelector('.collection-title');
        collTitleBox.innerHTML = `
        <div class="left">
            <h4 class="title">${data.items[colStorageNum].name}</h4>
        </div>

        <div class="right">
            <ul>
                <li>
                    <p>유형</p>
                    <span>${data.items[colStorageNum].era}</span>
                </li>
                <li>
                    <p>시대분류</p>
                    <span>${data.items[colStorageNum].type}</span>
                </li>
                <li>
                    <p>작가(출처)</p>
                    <span>${data.items[colStorageNum].author}</span>
                </li>
                <li>
                    <p>크기</p>
                    <span>${data.items[colStorageNum].size}</span>
                </li>
                <li>
                    <p>제작연도</p>
                    <span>${data.items[colStorageNum].year}</span>
                </li>
                <li>
                    <p>소품번호</p>
                    <span>${data.items[colStorageNum].colNum}</span>
                </li>
            </ul>
        </div>
        `;

        //  메인 소장유물 클릭시 유물 이미지 정보 불러오기
        const collImgBox = document.querySelector('.img-box');

        collImgBox.innerHTML += `
        <div class="bg-img">
        <img src="./${data.items[colStorageNum].img}" alt="">
        </div>
`;

        collImgBox.innerHTML += `
                <div class="img-print">
                <img src="./${data.items[colStorageNum].img}" alt="">
                </div>
        `;
        // collImgBox.style =`
        //     background-image: url('./${data.items[colStorageNum].img}');
        //     background-repeat: no-repeat;
        //     width: 100%;
        //     height: 100%;
        //     background-size: 100%;
        //     object-fit: cover;
        // `

        const elSpan = document.querySelectorAll('.right > ul > li > span'),
                elLi = document.querySelectorAll('.right > ul > li');

        elSpan.forEach(function(v,k){
            if(elSpan[k].childNodes.length == 0){
                elLi[k].style = 'display : none;'
            }
        })
    })


}

colClick();




var swiper = new Swiper(".dif-coll", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});