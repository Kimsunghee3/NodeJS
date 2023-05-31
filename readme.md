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