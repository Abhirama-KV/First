
// WRITE TO FILE

const fs=require('fs');
const http=require('http');
let server=http.createServer((req,res)=>{
    let url=req.url;
    let method=req.method;
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
        return res.end();
    }
    if(url==='/home'){
        res.write('<h1>Welcome home</h1>')
        // res.end();
    }
    if(url==='/about'){
        res.write('<h1>Welcome to About Us page</h1>');
        // res.end();
    }
    if(url==='/node'){
        res.write('<h1>Welcome to Node js project</h1>');
        // res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        return req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody);
            const msg=parseBody.split('=')[1];
            fs.writeFile('message.txt',msg,(err)=>{
                res.statusCode=302;//redirection
                res.setHeader('Location','/');
                return res.end();
            });
        });
        
    }
    // process.exit();
    // res.setHeader('Content-Type','html/text');
    // res.setHeader('content-type','text/html');
    res.write('<h1>Response from server side<h1>');
    res.end();
});

server.listen(4000);
