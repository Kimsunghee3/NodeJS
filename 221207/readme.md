### Network
osi 7계층

### sh


### kernel


### 식별자


### host
> switch
ex) 공유기
>end-point(시작점과 끝지점)
ex) client-server, peer to peer


### L4
TCP, UDP


### tcpserver, client구축
NodeJS환경에서 구축한다.
내장모듈 net을 사용한다.

### 기본셋팅
```sh
# yes옵션을 주고 package.json을 생성한다
$ npm init -y
```

### buffer
Buffer란 NodeJS에서 제공하는 binary의 데이터를 담을 수 있는 object이다.
버퍼는 일반적으로 RAM을 나타낸다. 버퍼는 바이트를 저장하는 단위이며 바이트는 8비트로 이루어져있다.
비트는 0101로 이루어져있다.
바이너리 데이터는 010101과 같은 데이터이다.
=> 0101과 같은 이진수가 buffer객체에 담긴다


### Buffer객체 변환하기
Buffer.from()