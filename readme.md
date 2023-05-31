### NodeJS 내장모듈 net을 활용하여 server와 client 구축하기


server가 있어야 client로부터 요청을 받을 수 있기에 server를 먼저 만들어주도록 하자


### package.json
설치한 패키지에 대해서 볼 수 있는 파일이다.
```sh
# yes 옵션
$ npm init -y
```

### 서버종료시 유의사항
client먼저 종료 후, server를 종료할 것

http는 기본적으로 tcp통신을 한다.
TCP통신은 쌍방향 통신이 가능하다.(한번 연결이 맺어지면 client에서 서버로 요청, server에서 client요청이 가능하다.)
> 쌍방향통신: server도 요청을 보낼 수 있다.
HTTP프로토콜의 규격을 우리는 브라우저의 요청만으로도 
브라우저 -> http://127.0.0.1:3000
나의 TCP server가 받을 수 있게


client에서 요청을 하게되면 3way handShake가 발생하고
브라우저가 서버로 데이터를 넘겨준다.
서버는 요청에 알맞은 데이터를 browser로 넘겨주고 연결을 종료한다.


브라우저의 개발자도구 네트워크 탭을 확인하여 127.0.0.1을 클릭해보면
요청헤더에 내용이 잘 담긴 것을 알 수 있다.

요청한 플랫폼 macOS
${body.toString}


브라우저에서 데이터를 요청하면 알맞게 html을 만들어주는 게 `backserver`의 역할이다.

server가 브라우저로 보내는 메시지 response메시지

### request메시지
browser -> server


http
request message구조
response message구조 공부하기

tcp server
http://127.0.0.1:3000

경일아카데미 header부분이 나오도록 만들어보기

https://hahahoho5915.tistory.com/62