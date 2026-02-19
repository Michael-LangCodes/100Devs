const http = require('http');
const path = require('path');
const fs = require('fs');

// //Create Server
const server = http.createServer((req, res) => {

//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content)=>{
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Home</h1>');}
// )}    if (req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content)=>{
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Home</h1>');}
// )}

// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//     console.log(server.address());
// });

    //Build File Path
    let filePath = path.join(__dirname, 'pulic', req.url === '/'? 'index.html': req-url);
    
    //Extension of File
    let extname = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html'

    //Check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.ccs':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            conentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content)=>{
        if (err) {
            if(err.code == 'EONET'){
                //Page Not Found
                fs.readFile(path.join(__dirname,'public','404.html'), (err,content)=>{
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                //Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    })
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(server.address());
});