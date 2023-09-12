//변수설정
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

//이벤트 바인딩

//btnCall을 클릭할때

btnCall.onclick = function(e){
    //링크이동금지
    e.preventDefault();

    //btnCall에 on이 있으면 제거하고, 없으면 추가
    btnCall.classList.toggle("on");
    //menuMo에 on이 있으면 제거하고, 없으면 추가
    menuMo.classList.toggle('on');
}

const frame = document.querySelector(".frame");
const articles = frame.querySelectorAll("article");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const opens = frame.querySelectorAll(".open");
const closes = frame.querySelectorAll(".close");

for (let i = 0; i < 2; i++) { frame.prepend(frame.lastElementChild); }
next.addEventListener("click", () => {
    frame.append(frame.firstElementChild);
})
prev.addEventListener("click", () => {
    frame.prepend(frame.lastElementChild);
})
opens.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.add("on");

        for (let ele of articles)
            !ele.classList.contains("on") && ele.classList.add("hide");
    })
})
closes.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.remove("on");
        for (let el of articles) el.classList.remove("hide");
    })
})
const panel = document.querySelector(".panel");
const next1 = document.querySelector(".next1");
const prev1 = document.querySelector(".prev1");
// let enableClick = true;

// 마지막 li를 떼어서 맨앞으로 붙여서 1부터 슬라이드가 시작되도록 
// panel.prepend(panel.lastElementChild);

panel.prepend(panel.children[panel.children.length -1]);

next.addEventListener("click",(e)=>{
    e.preventDefault();

    panel.style.transition = "margin-left 0.5s";
    panel.style.marginLeft = "-50%";

    // 슬라이더 순환이 되기 위한 코드
    panel.addEventListener("transitionend",()=>{
        panel.appendChild(panel.children[0]);

        panel.style.marginLeft = "-25%";
        panel.style.transition = "none";


    }, {once : true});

    // once : true는 이 이벤트 리스너가 오직 한번만 실행 된 후 그 후 자동적으로 
    // 제거 되도록 합니다 

})

prev.addEventListener("click",(e)=>{
    e.preventDefault();

    panel.computedStyleMap.transition = "margin-left 0.5s";
    panel.computedStyleMap.marginright = "-50%";

    // 슬라이더 순환이 되기 위한 코드
    panel.addEventListener("transitionend",()=>{
        // panel.appendChild(panel.children[0]);

        panel.Style.marginleft = "-25%";
        panel.style.transition = "none";
        

    }, {once : true});
})