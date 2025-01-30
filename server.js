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

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url.startsWith("/search")) {
//     const queryObject = url.parse(req.url, true).query;

//     res.writeHead(200, {
//       "content-type": "application/json",
//       "custom-header": "Node Js Server",
//       "custom-tracking": "1111",
//     });

//     res.end(JSON.stringify({ message: "Query Received:", queryObject }));
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Route not Found");
//   }
// });

// const PORT = 4000;

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// Route Handlers

// const routes = {
//   "/": (req, res) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Welcome to the Homepage");
//   },
//   "/about": (req, res) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("This is the about page");
//   },
//   "/notFound": (req, res) => {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Page not Found");
//   },
// };

// const server = http.createServer((req, res) => {
//   const { pathname } = url.parse(req.url);

//   if (routes[pathname]) {
//     routes[pathname](req, res);
//   } else {
//     routes["/notFound"](req, res);
//   }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// DYNAMIC ROUTES

// const routes = {
//   "/user/": (req, res, userId) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end(`User id: ${userId}`);
//   },
// };

// const server = http.createServer((req, res) => {
//   const { pathname } = url.parse(req.url);

//   if (pathname.startsWith("/user/")) {
//     const userId = pathname.split("/")[2];
//     if (routes["/user/"]) {
//       routes["/user/"](req, res, userId);
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Page not Found");
//     }
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page not Found");
//   }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// MIDDLEWARE FUNCTION

function logRequest(req, res, next) {
  console.log(`${req.method} made to ${req.url}`);
  next(req, res);
}

const server = http.createServer((req, res) => {
  logRequest(req, res, (req, res) => {
    const { pathname } = url.parse(req.url);

    if (pathname.startsWith("/user/")) {
      const userId = pathname.split("/")[2];
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(`User id: ${userId}`);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not Found");
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
