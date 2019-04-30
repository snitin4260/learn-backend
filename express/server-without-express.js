const http = require("http");
const hostname = "127.0.0.1";
const port = 8080;

// Create HTTP server and listen on port 8000 for requests
const server = http.createServer(function(request, response) {
  // Set the response HTTP header with HTTP status and Content type
  response.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  response.end("Hello Nitin\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

// Print U)RL for accessing server
