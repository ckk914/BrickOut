
### Brick Out

![image](https://github.com/ckk914/BrickOut/assets/50573460/218f477a-06a8-4aca-8517-5fa04916b5f2)
---
 ## 제한시간내 블럭숫자를 빠르게 클릭하는 프로모션 게임<br>
 <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/><img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/><img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
---

## 🕹게임 방법  <br>
- 게임시작 버튼을 눌러서 게임을 시작한다.  
- 제한 시간 안에 1부터 차례로 30까지 순서대로 클릭한다.
- 시간 내 다 누르면 클리어, 못누르면 실패😥
---
## 🎯 기능 요구사항  
숫자 박스 클릭 시 박스가 제거  
시작 화면 숫자 25까지 랜덤으로 생성  
26-30은 1~5번 박스 사라질때 5개 추가 생성 (30까지만 생성)  
6번부터 박스 클릭 시 화면에서 박스 안보이게 처리  
게임이 클리어 되면 게임 클리어 화면 팝업    
제한시간 내 게임을 클리어 못하면, 실패화면을 팝업    
  
💫적용 애니메이션  
1. 제거될때 재미를 위해 애니메이션 적용 =>박스가 커졌다가 작아지는 효과  
2. 숫자 순서가 틀렸을때 애니메이션  적용 =>일시적으로 박스 Red 로 표시  
3. 게임 시작 화면 전환 애니메이션 적용
     
## 🐞 Bug Report
1. 게임시작 박스를 지웠는데, 게임 시작 버튼이 살아 있어서, 게임 시작 계속 클릭되는 현상 발생
![image](https://github.com/ckk914/BrickOut/assets/50573460/1e6634fa-0e6c-4195-88f7-74bd31f48c72)
- 게임 시작 박스+ 게임 시작 버튼 둘다 display:none; 처리로 해결!
```
    $GameStart.classList.add(`Hidden`);
    $StartContainer.classList.add(`Hidden`);
```
2. 게임 종료 후 Game Clear였는데, GameOver되는 문제  
  = 코드 확인 결과 타이머 중복 선언  
  = -> 중복된 타이머 제거 후, 코드 보완점으로 ClearFlag 추가하여, 문제 처리 완료!

3. '게임 시작' 여러 번 클릭 시 블럭 계속 생성






![image](https://github.com/ckk914/BrickOut/assets/50573460/3df005b9-95eb-4672-9c0a-e5fa4f67462a)
　
　
　



   
'게임 시작'을 500ms 안에 
다시 클릭한 것이면 return 되도록 처리

   
---
