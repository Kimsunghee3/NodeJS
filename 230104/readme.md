### 비동기 통신(callback || promise || async/await)

### Database

### CRUD


### xmlhttprequest --> fetch

### fetch --> axios


### 초기셋팅
back, front에 각각 npm init -y을 해주자
>back: 3000
>front: 3005


### front 기본셋팅
```sh
$ npm init -y
$ npm install express nunjucks
```


### back 기본셋팅
```sh
$ npm init -y
$ npm install express cors
```

### 주의사항
server.js에서 public을 고정 값으로 넣어줌으로서
html파일에서 css나 js파일을 불러올 때 경로를 public을 제외한 이후부터 작성해주어야한다.


### CRUD
기존의 형태
board/ list
GET/comments

POST /board/write
PORT /comments

GET /board/view
GET /comments/:id

POST /board/modify
PUT /comments/:id

POST /board/delete
DELETE /comments/:id

앞으로 만들형태
GET /board/list
POST /board/write 
GET /board/view
POST /board/modify
POST /board/delete

GET /comments
PORT /comments
GET /comments/:id
PUT /comments/:id
DELETE /comments/:id

### postman
http요청을 만들어주는 툴
```html
<form action="/", method="post">
    <input type="text" name="userid" />
    <input type="text" name="userpw" />
    <button type="submit"> submit </button>
</form>
```