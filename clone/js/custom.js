  
// 박물관 새소식 스와이퍼
var swiper = new Swiper('.first-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    1024:{
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },

})


// 공지사항 스와이퍼
var swiper = new Swiper(".mySwiper", { 
      direction: "vertical",
      centeredSlides: true,
      autoHeight : true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      
    });

// 박물관 새소식 백그라운드 이미지 스크롤에따라 위치변동
const bgImg = document.querySelector('.deco-only-pc');

function bgScroll(){
  let y = pageYOffset/4; //scrollY
  bgImg.style = `left:${y}px`
}

window.addEventListener('scroll',bgScroll);


//소장유물 json데이터 가져오기

  const collImg = document.querySelector('.collections-img > img'),
    colType = document.querySelector('.info > .category'),
    colTitle = document.querySelector('.info > .collections-title');


    fetch('./json/data.json')
    .then(res => { return res.json()}) // 한줄일땐 (),{]생략가능 근데 {}쓸땐 return시켜줘야함 안쓰면 필없
    .then(data => {

        data.items.forEach((obj,k) => {
          colBox = document.querySelector('.collections-content');
            colBox.innerHTML += `
            <li class="grid-item">
            <a href="./collections-click.html">
                <div class="collections-img">
                    <img src="${obj.img}" alt="z">
                    <div class="screen">
                        <span>
                            자세히 알아보기
                        </span>
                    </div>
                </div>
                <div class="info">
                    <p class="category">
                        ${obj.type}
                    </p>
                    <p class="collections-title">
                        ${obj.name}
                    </p>
                </div>
            </a>
        </li>
            `;
        })

        //이미지들 변수로 잡아주고
        const elGridItem  = document.querySelectorAll('.grid-item img');
        // 이미지 반복문 돌려서 다 나오게한뒤 로드이벤트 주기
        elGridItem.forEach((eleImg,key)=>{
          eleImg.addEventListener('load',()=>{
            // 계속 반복문실행중일꺼니 이미지 전체 길이값과 foreach에 키값 비교해서 같으면 이제 그만실행
            if(elGridItem.length-1 == key) maso(); 
          })
        })

        const itemLink = document.querySelectorAll('.grid-item > a');

        itemLink.forEach(function(v,k){
          v.onclick = function(e){
            localStorage.setItem("num",k)
          }
        })
      
    })




        // 소장유물 masonry
        function maso(){
          $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: $('.grid-item:first').width(),
            percentPosition: true,
            gutter: '.gutter-sizer',
            
          });
      
        }
    