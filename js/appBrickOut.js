//전역 변수 영역
const $mainContainer = document.querySelector(`.mainContainer`);
const $btnBox = document.querySelector(`.btnBox`);
const $TimerBox = document.querySelector(`.TimerBox`);
const $Timer = document.querySelector(`.Timer`);
const $NumberBox = document.querySelector(`.NumberBox`);
const $ulList = document.querySelector(`.ulList`);
const NumList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
//지울 순서 번호
let deleteNumber = 1;

let addNumber = 26;

//배열 섞기
const shuffledArray = NumList.sort(() => Math.random() - 0.5);
console.log(NumList);

// 추가 함수로 할 것
// 배열 랜덤 생성
for (let Num of NumList) {
  const $CreateLi = document.createElement(`li`);
  $CreateLi.textContent = Num;
  $ulList.appendChild($CreateLi);
}
//클릭하여 삭제 하기!
$ulList.addEventListener(`click`, (e) => {
  //클릭한 텍스트 찾기
  const clickText = e.target.textContent;
  console.log(typeof e.target.textContent);
  console.log(typeof deleteNumber);
  console.log($ulList);
  if (deleteNumber !== +clickText) return;
  const liList = $ulList.querySelectorAll(`li`);
  for (let li of liList) {
    if (+clickText === +li.textContent) {
      console.log(li);
			if(deleteNumber<=5){
      li.parentElement.removeChild(li);
			}
			else{
				li.classList.add(`disable`);
			}
      deleteNumber++;
      if (addNumber <= 30) {
        const $CreateLi = document.createElement(`li`);
        $CreateLi.textContent = addNumber;
        $ulList.appendChild($CreateLi);
        addNumber++;
      }
    }
  }
});

let totalTime = 30000; // 30초를 밀리초로 변환

const timerId = setInterval(() => {
  let seconds = Math.floor(totalTime / 1000);
  let milliseconds = Math.floor((totalTime % 1000) / 10); // 밀리초를 0.01초 단위로 표시
  // 화면에 시간 표시 (sec:msec 형식)
  console.log(`${seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`);
  $Timer.textContent = `${seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
  
  totalTime -= 10; // 10밀리초 감소
  if (totalTime < 0) {
    clearInterval(timerId); // 타이머 종료
    $Timer.textContent = `GAME OVER!`;
  }
}, 10);