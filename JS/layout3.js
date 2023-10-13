        /*
        1.재사용가능하게 class만들기
        2.input에 label 태그가 유용하다.
        */

        /*last_name은 왜 autocomplete 적용안됨? */

var inputField = document.getElementById("myInput");
let input =document.getElementsByClassName("input");

// 입력 필드에 포커스가 들어올 때
inputField.addEventListener("focus", function() {
  inputField.classList.remove("empty"); // 빈칸 클래스 제거
});

// 입력 필드 이외의 영역을 클릭했을 때
document.addEventListener("click", function(event) {
  if (event.target !== input) { // 입력 필드가 아닌 곳을 클릭한 경우
    if (inputField.value.trim() === "") {
      inputField.classList.add("empty"); // 빈칸 클래스 추가
    }
  }
});

// 확인 버튼을 클릭했을 때
function checkInput() {
  if (inputField.value.trim() === "") {
    inputField.classList.add("empty"); // 빈칸 클래스 추가
  }
}

/* 
해결하기
1.그럼 클릭하지 않고 바로 버튼을 누르면 빈칸 체크 불가능
2.다른 input입력할려고 누르면 빨간색
input 클릭시 

*/
