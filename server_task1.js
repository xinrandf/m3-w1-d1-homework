const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url;

    // Check the URL and respond accordingly
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Xinran Home Page!');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Xinran About Page.');
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Xinran Contact Page.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid Request!');
    }
});

// Listen on port 5001
server.listen(5001, () => {
    console.log('The NodeJS server on port 5001 is now running…');
});