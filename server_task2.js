const http = require('http'); // Import the HTTP module
const fs = require('fs'); // Import the File System module
const path = require('path'); // Import the Path module for file paths

// Create server2 task2.js
const server = http.createServer((req, res) => {
    const url = req.url; // Get the URL of the current request

    if (url === '/' || url === '/home') {
        // Serve the home.html file
        fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (url === '/about') {
        // Serve the about.html file
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (url === '/contact') {
        // Serve the contact.html file
        fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Serve a 404 Not Found response for other URLs
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Listen on port 5000
server.listen(5000, () => {
    console.log('The NodeJS server on port 5000 is now running…');
});