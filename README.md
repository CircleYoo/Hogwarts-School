# Hogwarts-School

해리포터 세계관 속 호그와트 마법학교 - 반응형 웹사이트<br/>
**배포주소** : <https://jihana030.github.io/Hogwarts_School/views/index.html/> <br/> <br/>

![poster](https://github.com/CircleYoo/Hogwarts-School/blob/master/static/img/circle/common/Thumbnail.jpg)


### 💼 작업기간
> 4인 제작 <br/>
  2023.01.05 ~ 02.10

### 🤝 멤버구성
* 공통 : 반응형 구현 <br/>
> 김혜린 : 공동 헤더 및 푸터, 기숙사 리스트 및 상세소개, 마이페이지 <br/>
  유정원 : (디자인 총괄) 메인페이지, 소스 제작, PPT 제작 <br/>
  이서하 : (기획 총괄) 회원가입, 로그인, 기숙사 테스트 <br/>
  황지원 : (서기) 도입부, 교수진 소개, 학교연혁 

### ⚙ 개발환경
> `JavaScript(ES6)` <br/>
  `HTML5` <br/>
  `CSS3`

## ✔ 주요 담당기능
<!-- 헤더 -->
**Header**
* 스크롤에 따른 헤더 숨기기 및 표시하기
* 현재 날짜 표기
* 로그인 아이콘 제작

**달력 및 소개**
<!-- <h4 style="background-color:#fff5b1;">메인 페이지</h4> -->
* 배열과 for문을 이용한 달력 구현
* Split() 함수를 이용해 문자열을 분할하는 Hover 이벤트 <br/>

**기숙사 점수**
* 스크롤 거리값과 구역 높이값을 이용한 점수 카운팅 애니메이션 <br/>

**교내 소식지**
* scroll-snap-type 속성을 사용해 자동으로 최상단 부분이 스냅
* 기사 영역 스크롤 거리값을 이용하여 기사를 넘길 때마다 숫자 전환 <br/>

**교수 및 교과목 소개**
* JSON 데이터를 가져와 구현
  * 앞면 | 과목
  * 뒷면 | 해당 과목 담당교수
* Preserve3d 속성을 사용해 mouseover시 카드 flip 효과 <br/>

**Footer**
* 롤링 텍스트 : 롤링배너 복제본 생성 후, 원본 너비값을 이용해 복제본 위치 생성 <br/>

**이스터에그**
* 루모스 & 녹스 : 검색창에 주문 입력 시, 지팡이(커서) 주변만 밝아짐
* 볼드모트 : mask 속성과 keyframe를 이용
* 울토 머틀 : 텍스트 분할 후, blur 효과
