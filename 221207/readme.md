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


### PhysicalLayer H/W
NetworkInterfaceCard(NIC) 랜카드라고도 하며 물리적 장치이다. IP

### DataLinkLayer S/W
driver

### NetworkLayer Internet
IP

### TransportLayer
TCP

### SessionLayer
내가 나임을 증명하는 계층


### PresentationLayer


### ApplicationLayer


### socket file 프로세스와 TCP를 연결해주는 역할
프로세스는 socket으로 데이터를 넘겨주고 socket은 TCP로 데이터를 넘겨준다.
누구랑 어떻게 통신을 할 건지에 대한 통신경로를 만들어주는 역할을 한다.                                                   


### Host
인터넷이 되는 컴퓨터를 Host라고 한다.
Host는 End-point와 switch로 나뉜다.


### End-point 단말기
시작과 끝..


### switch 공유기
예를 들어 A,B,C 컴퓨터 3대가 서로 통신을 하고 싶다면 ABC 컴퓨터 모두 연결이 되어 있어야 할 것이다.
하지만 한대의 컴퓨터로 여러개의 컴퓨터를 동시에 통신할 수는 없기 때문에 이럴 때 스위치를 사용하여
연결해준다.  


### switch
예를 들어 미국에 있는 컴퓨터에 접속을 하고 싶다면 중간의 스위치가 중간다리 역할을 해줘서 통신이 가능할 것이다.
물리적으로 바닷속에는 해저케이블이라는 것이 존재하므로 접속이 가능한 것이다.
어떠한 식별자로 식별을 했는지에 따라 스위치의 이름이 달라지게 된다.
MacAddress를 스위치를 했다면 L2스위치, IP기준으로 스위치를 했다면 L3스위치, 포트기준으로 스위치를 했다면 L4스위치,
IP기준으로 스위치를 했다면 라우터라고 한다


### packet

> RoutingTable: 이정표
> Router(L3): 교차로
> Packet: 데이터
> Internet: 도로망


### L4
TCP에는 연결이라는 개념이 있다.(connection, session)
연결은 순차적으로 진행된다.
TCP는 서로 데이터를 주고 받으며 서로가 맞는 지 확인하는 것을 `연결`이라고 한다.
TCP프로토콜에서 문제가 생겼다면 다시 처음부터 실행을 한다.
상태라는 개념을 가지고 있다(로그인, 로그아웃)


### 3-way Handshake
서버컴퓨터는 client의 요청을 받기 위해서 listen을 하고 있어야한다
client가 server에게 데이터(syn: 시퀀스 넘버)를 보내주고
server는 확인을 위해 받은 시퀀스 넘버에 자신의 시퀀스넘버를 생성하고 함께 보내준다.
syn + ack(server의 시퀀스 넘버)
client는 server로 부터 데이터를 받게 되면 `연결`이 되었다고 인식한다.
client는 받은 Ack(101)를 다시 server로 전달해준다.
server 데이터를 전달받고 연결된다.

-> 물리적으로 연결된 것이 아닌 데이터를 주고 받는 것을 연결이라고 한다.