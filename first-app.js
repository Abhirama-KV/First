const http=require('http');
const requestHandler=require('./route');
console.log(requestHandler.someText);
let server=http.createServer(requestHandler.handler);

server.listen(4001);
