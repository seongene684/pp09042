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