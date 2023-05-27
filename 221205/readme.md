### 프로그램, 프로세스
NodeJS 프로그램을 설치할 줄 알아야한다.


### NodeJS
Linux 환경에서 설치한다.


### NVM(NodeJS Version Manager)
매년 2개의 버전이 증가하는데 상위 버전이 필요할 때가 있고
하위 버전을 사용해야 할 때가 있을 때 버전을 쉽게 관리해주는 도구이다.
```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

### source 
터미널을 재실행 하지 않고 파일을 읽어준다.
```sh
$ source 파일명
```


### nvm --version
NVM의 버전을 확인할 수 있는 명령어이다.
터미널에 nvm --version을 했을 때 버전 확인이 되면 정상적으로 설치가 된 것이다.
```sh
$ nvm --version
```

### nvm list
설치할 수 있는 버전에 대한 목록을 확인할 수 있는 명령어이다.
```sh
$ nvm list
```


### nvm install --lts
lts버전에 대해서 설치하겠다는 의미이다.
```sh
$ nvm install --lts
```


### node --version
Node의 버전을 확인할 수 있는 명령어이다.
터미널에 node --version 입력 후 버전 확인이 되면 정상적으로 설치가 된 것이다.
```sh
$ node --version
```


### NodeJS
- 이벤트 기반
- 논 브로킹 I/O
> 프로세스와 스레드


### REPL
>R(Read) 읽고 
>E(Evaluate) 평가하고
>P(Print) 출력
>L(Loop) 반복


### node
REPL모드로 진입하게 된다.
```sh
$ node
```



### 객체 배열
다양한 데이터를 그룹화하고 효율적으로 관리하기 위해서 배열 안에 객체를 만들어 사용하는 것을 `객체 배열`이라 부른다.
```js
const students = [
    {
        name: "a",
        age: 12,
        blood-type: 'a'
    },
    {
        name: "b",
        age: 12,
        blood-type: 'o'
    },
    {
        name: "c",
        age: 14,
        blood-type: "ab"
    }
]

module.exports = students
```

### module
모듈이란 관련된 코드들을 하나의 코드 단위로 캡슐화 하는 것을 말한다.


### NodeJS
NodeJS는 chrome V8 JavaScript 엔진(컴파일러)으로 빌드된 JavaScript런타임(실행환경)이다.
Node를 통해 JavaScript를 실행할 수 있다.(주로 서버를 실행할 때 사용된다.)
NodeJS JavaScript를 서버에서도 사용할 수 있도록 만든 프로그램이다.
NodeJS는 JavaScript엔진 위에서 동작하는 JavaScript 런타임(환경)이다.
NodeJs는 서버사이트 스크립트 언어가 아닌 프로그램(환경)이다.
NodeJs는 웹서버와 같이 확장성 있는 네트워크 프로그램을 제작하기 위해 만들어졌다.
NodeJs에서 사용되는 언어로는 JavaScript를 활용하며, Non-blocking I/O 단일 스레드 이벤트루프를 통한
높은 처리 성능을 가지고 있는 것이 특징이다.

NodeJS를 통해 웹 어플리케이션이 더욱 발전하게 되었으며, 정적이 홈페이지 뿐만 아니라 쇼핑몰, 티켓 예매사이트, 
블로그 등 데이터가 변해가는 사이트를 만들 수 있으며 프로그램과 게임을 웹상에서 구동시켜 안드로이드폰, 아이폰,
윈도우 PC, 맥등 플랫폼의 제약에서 벗어나 어디든 상관없이 실행이 가능하게 해준다.

실시간 채팅 등, 실시간으로 기능,로그인 기능등을 넣어 데이터를 관리하는 데이터 베이스기능을
NodeJS를 통해 만들 수 있다.


### NodeJS 사용 목적
NodeJS는 JavaScript를 사용하기 위해 만들어진 것이다.
JavaScript는 스크립트언어이므로 특정 프로그램 안에서만 동작이 가능하다.
따라서 웹 브라우저 프로그램 안에서만 동작하므로 웹브라우저가 없을 경우 사용할 수 없는 프로그램이다.
ex) web browser: 크롬, 사파리, 익스플로러, 파이어 폭스

NodeJS는 JavaScript를 웹 브라우저에서 독립시킨 것으로 NodeJS를 사용하면 터미널 프로그램(cmd, terminal)에서 
NodeJS를 사용하여 브라우저 없이 바로 실행할 수 있다.
-> 자바스크립트에서 파생되었으므로 문법은 동일하다.

### NodeJS 장점
NodeJS를 사용하여 서버를 만들 수가 있다.
이전에는 Server-Client 웹사이트를 만들 때 웹에서 표시되는 부분은 JavaScript를 사용하여 만들어야 했으며,
서버는 다른 언어(Java, Reby)등을 사용해서 만들었지만, JavaScript만으로 전체 웹페이지를 만들 수 있다는 이점이 있다.


### 자바스크립트 런타임
런타임은 특정 언어로 만든 프로그램을 실행할 수 있는 환경이다.



NodeJS
내 컴퓨터 조작이 가능하다.
NodeJS를 사용하기 위해서는 먼저 설치를 해주어야한다.
NodeJS를 Linux환경에서 설치해주어야한다.


NodeJS의 장점
싱글스레드이므로 비동기적으로 처리를 해놓아서 개발 속도가 빠르다. 


NVM(NodejsVersionManager)

Node의 버전을 쉽게 관리해주는 도구이다.
Node는 매년 2개의 버전이 업데이트되는데 사용하다보면 상위버전이 필요할 때가 있고 하위버전을 사용해야 할 때
버전 관리를 쉽게 해주는 도구이다.
터미널에 아래의 명령어를 입력하여 설치를 진행해준다.
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

source

터미널을 재실행하지 않고 파일을 읽어준다.
$ source 파일명



nvm --version
NVM의 버전을 확인할 수 있는 명령어이다.
터미널에 nvm --version을 했을 때 버전 확인이 되면 성공적으로 설치가 된 것이다.
$ nvm version



nvm list
설치할 수 있는 버전에 대한 목록을 확인할 수 있는 명령어이다.
$ nvm list



nvm list --lts
nvml list에 있는 목록을 설치해주는 명령어이며, nvm list에서 lts버전에 대해서 설치하겠다는 의미이다.
$ nvm install ---lts


node --version

Node의 버전을 확인할 수 있는 명령어이다.
터미널에 node --version 입력 후 버전 확인이 되면 정상적으로 설치가 된 것이다.
$ node --version


REPL

Read, Evaluate, Print, Loop의 약자로 읽고 평가하고 출력을 반복한다는 의미이다.
터미널에 `node`를 입력하면 REPL모드로 진입할 수 있다.
REPL모드를 종료하고 싶은경우 .exit를 입력하거나 Ctrl + c, Ctrl + d를 눌러 종료가 가능하다.
$ node
터미널에 node를 입력하여 REPL모드로 진입 후 console.log("hello")를 찍게 되면 hello와 return값 undefined가 찍힘을 확인할 수 있다. node는 JavaSciprt 런타임(실행환경)이므로 출력이 가능하다.

terminal

browser에서도 개발자도구를 사용해서 console.log("hello")를 찍으면 hello와 return값 undefined가 출력됨을 알 수 있다.

browser

브라우저와 터미널의 실행결과가 동일한데 이 둘의 차이점은 무엇일까?
바로 this가 다르다는 점이다. 브라우저와 터미널에서 this를 입력해보자

터미널에서 this는 global이 출력된다. js를 해석해주는 nodeJS를 실행시켜준 것이다. 
브라우저가 가지고 있는 JS엔진을 사용하여 실행시켜준 것이다. 동일한 형태로 돌아갈 뿐 실행환경은 전혀 다르다는 점을 알 수 있다.

terminal의 this

browser의 this


JavaScript파일로 실행하기

터미널에서 vi 파일명을 입력하게 되면 입력한 파일명을 가진 파일이 열리게 된다.
영문키 i를 눌러 입력모드로 진입 후 내용을 console.log("hello world!!")라고 입력해보자
esc키를 눌러 명령모드로 진입 후 :wq!를 입력해주면 저장이 완료된다.
저장된 파일을 실행시키고 싶다면 터미널에서 node 파일명으로 실행 시켜준다.

콘솔에 입력한 hello world!!가 잘 출력되는 것을 확인할 수 있다.


프로그램과 프로세스

프로그램이 실행되는 것을 프로세스라고 한다. 위의 JavaScript파일로 실행하기의 내용을 보고 예를 들면
node라는 프로그램을 통해 JavaScript를 해석해서 실행시켰고 프로세스가 실행이 완료되서 프로세스가 종료되었다는
사실을 알 수 있다. 프로세스를 확인하려면 프로그램이 꺼지지 않아야한다. 그렇게되려면 콜스택이 계속 쌓여야가능하다.
먼저 테스트를 위해, loop.js라는 파일의 만들어주고 setInterval함수를 사용하여 1초마다 콘솔이 찍히게끔 코드를 작성해주자.
setInterval의 첫번째 인자로는 콜백함수, 두번째 인자로는 넘버가 들어간다.
setInterval(() => {
    console.log("hello world")
}, 1000);
파일을 실행시키고 싶다면 위에서 배웠던 node 파일명을 입력하여 확인해보자
터미널에 node loop.js를 입력 후 확인해본 결과 1초마다 콘솔이 잘 찍히는 것을 볼 수 있다.


새로운 터미널을 열고  ps -ef | grep 명령어를 통해 현재 실행되고있는 프로세스를 확인해보자
loop.js파일이 제대로 실행되고 있는 것을 확인할 수 있다. loop.js파일의 프로세스가 잘 올라가 있다.

현재 실행되고 있는 loop.js파일을 종료하고 싶다면 실행되고 있는 해당 터미널에 들어가 ctrl + c를 통해 종료해주면 된다.
마치 Mac에서의 ctrl + q 와 같은 느낌이다.



프로세스의 형태
프로세스에는 포그라운드 프로세스와 백그라운드 프로세스가 있다.

포그라운드 프로세스
눈에 보이는 프로세스

백그라운드 프로세스
눈에 보이지 않는 프로세스
백그라운드로 파일을 실행시켜주고 싶다면 터미널에 node 파일명 & 을 입력해주면 된다.
$ node loop.js &



백그라운드는 종료하고 싶다면 프로세스 아이디를 알아야한다.
프로세스 아이디가 기억이 나지 않아 찾고 싶다면 ps -ef | grep 명령어를 통해 찾을 수 있다.
첫번째 자리는 프로세스를 실행한 UID, 두번째 자리는 PID(Process ID), 세번째 자리는 PPID(ParentProcessID)를 나타낸다.
나머지는 tty, time, commend-line이 출력된다. 


종료명령어로는 kill -9 프로세스아이디를 사용한다. 종료시 PPID를 입력하지 않도록 주의하자‼️

실행시켰던 해당 터미널을 확인해본 결과
[1] + 13724 killed node loop.js, 프로세스가 13724인 node로 실행시킨 loop.js파일이 killed되었다.


제대로 프로세스가 종료되었는 지 ps -ef|grep node 명령어로 확인해보자
해당하는 파일명을 가진 프로세스가 없으므로 loop.js에 대한 프로세스가 잘 종료되었음을 확인할 수 있다.

메모리에 프로그램을 실행하게 되면 메모리의 공간을 어느정도 차지 하게 된다.
실행된 해당 파일에 let a = 100 이라는 변수가 있다면 메모리에는 변수가 저장되게 될 것이다.

예를 들어 A라는 파일에 먼저 let a=100이라는 값을 주고 저장한 다음 B라는 파일을 만들어 let a = 100이라는 변수를 똑같이 만들어주었다고 가정했을 때, B의 let a는 A를 참조하지 않고 새로운 공간을 만들어서 let a = 100이라는 값을 저장해준다.


스레드

하나의 프로세스에는 하나의 스레드가 있으며, 하나의 스레드만을 사용하는 것을 `싱글 스레드`라고 한다.
스레드와 프로세스의 차이로는 스레드는 데이터의 공유가 가능하다는 점이다.
프로세스는 데이터 공유가 불가하다. 따라서 프로세스끼리의 데이터 공유를 하려면 네트워크를 사용해야한다.


싱글스레드

싱글스레드는 사실 스레드는 두개이지만, 내가 컨트롤 할 수 있는 스레드가 한 개이다.
예를 들어 node로 파일 했을 때 스레드는 두개이다. 컨트롤 할 수 있는 스레드와 
컨트롤 할 수 없는 스레드(함수를 실행했을 때..)가 실행될 것이다.
하나의 작업이 완료되어야만 나머지 작업을 처리할 수 있는 것을 `동기처리`라고한다.
예를 들어보자 카페에서 손님 4명이 커피를 주문했다고 가정하고, 싱글스레드를 기계에 비유해보자
커피를 만들기 위한 기계(스레드)가 하나이므로 한번에 한 잔의 커피를 만들어야 다음 잔을 만들 수 있다.
이처럼 한번에 하나의 작업만이 가능한 것을 싱글스레드라고 한다.


멀티스레드

스레드가 만약 네개라면 한번에 작업할 수 있는 공간이 네개라는 의미이므로 한번에 여러 작업을 처리할 수 있다.
예를 들어 카페에 손님 4명이 커피를 주문했다고 가정하고, 스레드를 기계에 비유해보면
커피를 만들기 위한 기계(스레드)가 여러대 있으므로 한꺼번에 4개의 주문을 받아서 한번에 처리가 가능하다.


논블로킹 I/O

NodeJS에서는 싱글스레드이며, 두개의 스레드를 사용하여 마치 멀티스레드를 사용하는 것과 같은 결과가 나오도록
구현을 해놓았다. 따라서 Nodejs에서는  빠른 개발이 가능하다. 입력 데이터들을 받고 나오는 순서대로 출력하므로
이를 `논브로킹 I/O(Input/Output)`이라고 한다.


프로세스와 스레드의 차이

프로세스를  사람에 비유해보자 사람 4명이 각각 커피를 만든다고 했을 때, 해당 커피를 누가 만들었는 지 알 수 가 없다
그 이유는 프로세스끼리는 데이터 공유가 불가하기 때문이다.
스레드를 기계에 비유해보면 4개의 기계에서 커피를 추출한다고 했을 때 커피포트를 보고 완료가 되었는 지 구분이 가능하다.
또 한가지 예를 들어보면 A라는 브라우저와 B라는 브라우저가 있다. 
A에서는 멀티스레드 방식을 사용하고 B에서는 멀티프로세스를 사용한다고 한다.
둘다 탭메뉴를 실행했을 때 A와 B에서 응답 없음이라는 메시지가 떳을 때, 둘의 차이가 무엇일까?
A에서는 여러개의 탭에서 동시에 응답 없음이라는 화면이 나타나게 될 것이고, B에서는 하나의 탭에서만 응답없음이라는 메시지가 
나오게 된다.  이 차이는 프로세스끼리는 데이터 공유가 불가하기 때문에 하나의 프로세스에서 문제가 발생하더라도 다른 프로세스에 영향을 주지 않는 것이다. 하지만 스레드끼리는 데이터를 공유하기 때문에 하나의 스레드에 문제가 생겼을 때 모든 스레드에서 영향을 받아
사용이 불가하게 되는 것이다. 따라서 NodeJS는 싱글스레드이므로 NodeJS를 사용할 때는 예외처리를 깔끔하게 해주어야 영향이 없다.
