// 타이핑 할 내용
const content = "Typing Effect"

const text = document.querySelector(".text")
// content의 문자하나하나의 index 접근하기 위해서 사용
let index = 0;

function typing(){
    // text에 하나씩 추가
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
    }

}
setInterval(typing,500)
