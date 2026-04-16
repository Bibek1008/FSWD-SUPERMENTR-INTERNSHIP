const http = require("http");

// Server listens on port 3000
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  // Routes
  if (req.url === "/") {
    res.end("Hello! Welcome to the Home page.");
  } else if (req.url === "/about") {
    res.end("This is the About page. Node is fun!");
  } else if (req.url === "/contact") {
    res.end("Contact us at hello@server.com");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
