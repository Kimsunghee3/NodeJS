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