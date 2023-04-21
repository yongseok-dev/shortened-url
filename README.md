# shortened-url

Converts long URLs to short URLs, making it convenient for users to share URLs.

## **서비스 안내**

- https://url.seok.app/
- https://url.seok.app/KRONGM

## **기술 스택**

- 프론트엔드: EJS, MVP.css
- 백엔드: Node.js, Express.js
- 데이터베이스: SQLite

## **사용 방법**

### **1. URL 입력**

사용자는 변환하고자 하는 긴 URL을 입력

### **2. 변환 요청**

입력한 URL을 서버로 전송하여 짧은 URL로 변환을 요청

### **3. 변환 결과**

서버에서 짧은 URL을 생성, 해당 URL을 사용자에게 반환

사용자는 해당 URL을 공유·저장

### **4. URL 접속**

사용자가 짧은 URL에 접속, 서버는 해당 URL과 매칭되는 긴 URL을 조회하여 사용자에게 반환

## **설치 방법**

1. `git clone https://github.com/yongseok-dev/shortened-url.git`
2. `cd shortened-url`
3. `npm i`
4. `.env` 생성
   ```
   NODE_ENV =
   PORT =
   DOMAIN =
   GITHUB_CLIENT_ID =
   GITHUB_CLIENT_SECRET =
   JWT_SECRET =
   ```
5. `cp ./data/SQLite.db ./data/SQLite`{NODE_ENV}`.db `
6. `npm start`

## **개발자 정보**

- 이름: yongseok
- 이메일: yongseok.dev@gmail.com
