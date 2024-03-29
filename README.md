<h1 align="center">현재 개발중이지 않고, 우선순위도 밀려 있는 프로젝트입니다</h1>

# 더 자세히 알아보기
[jinkyumpark.com/simply-journal](https://jinkyumpark.com/portfolio/simply-journal)

# 기획
- 일기를 매일 쓰는 건 너무 어려움
- 하지만 예전 일기를 보며 추억에 빠지는건 너무 즐거움
- 일기 쓰는게 왜 어려울까?
	- 일기는 각 잡고 쓰려 해서 지속이 어려움
	- 잘 써야 한다는 압박이 있어서 괜히 현학적으로 쓰게 됨
	- 막상 써도 자주 보게 되지 않음
- 일기를 어떻게 하면 자주 쓰게 될까?
	- 그 날 있었던 일만 간단히 한 줄만 쓰면 매일 쓸 수 있지 않을까?
	- 그 날 일과 감정만 남겨도 나중에 추억할 수 있음
	- 내가 쓴 일기와 그 날의 감정을 예쁘게 정리해 주고 Main Page에서 지난 일기를 추억하게 해 주면 좋지 않을까?

# 개발 계획
1. 시제품
	- 매일 최대 1번 일기 작성
	- 내가 쓴 일기를 다양한 기간별로 조회
	- 내가 쓴 일기 삭제, 편집
	- 일기 내용 검색
	- 간단한 서비스 소개 페이지
2. 로그인 기능 추가
3. 메인 페이지 기능 추가
4. 일기 공유 기능 추가
	- 댓글 기능
    - 공개 설정에 따라 접근 가능 (전체, 친구, 비공개)
5. 다른 유저 팔로우 기능 추가

# URL Mapping
## Front
|                    URI                    |      Requirements      |                     Explanation                     |
|:-----------------------------------------:|:----------------------:|:---------------------------------------------------:|
|                     /                     |       Logged In        |          Main page featuring past diaries           |
|               /introduction               |           -            | Introduction to the service, login/join suggestions |
|       /diary/:RANGE?page&start&end        |       Logged In        |         List of Diaries with Date Selector          |
|               /diary/write                |       Logged In        |                  Diary Write Form                   |
|           /diary/eidt/:DIARY_ID           |       Logged In        |             Individual Diary Edit Form              |
| /diary/share/:USERNAME/:YEAR/:MONTH/:DATE | Diary is set to public |     Indivitual diary view with comment section      |
|             /search/:KEYWORD              |       Logged In        |           Search keyword from my diaries            |
|                  /login                   |           -            |                     Login Form                      |
|                   /join                   |       Logged out       |                      Join Form                      |
|                   /faq                    |           -            |                      Faq View                       |
|                   /qna                    |           -            |                      Qna View                       |
|                /qna/write                 |           -            |                   Qna Write Form                    |

# 오류 해결 일지
