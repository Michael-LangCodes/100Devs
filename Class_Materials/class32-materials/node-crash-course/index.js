const http = require('http');
const path = require('path');
const fs = require('fs');

//Create Server
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content)=>{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1>');}
)}    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content)=>{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1>');}
)}

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(server.address());
});
