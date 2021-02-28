var http = require('http');
var fs = require('fs');
var url = require('url');   //'url'이라는 [모듈]을 [변수]'url'이라는 이름으로 사용할 것이다.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
});
app.listen(3000);
