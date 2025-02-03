const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: forgetting to end the response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, world!');
  // Missing res.end() here! 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});