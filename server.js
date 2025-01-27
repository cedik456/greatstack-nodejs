// GET REQUEST

const http = require("http");
const url = require("url");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Welcome to homepage");
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Page not found");
//   }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// POST REQUEST

// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/submit") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       res.writeHead(200, { "content-type": "application/json" });
//       res.end(JSON.stringify({ message: "Data Received", data: body }));
//     });
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Route not Found");
//   }
// });

// const PORT = 4000;

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// HANDLE QUERY

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url.startsWith("/search")) {
    const queryObject = url.parse(req.url, true).query;

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Query Received:", queryObject }));
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route not Found");
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
