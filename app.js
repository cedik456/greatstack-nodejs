// const fs = require("fs");
// const http = require("http");
const path = require("path");

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// --------------------------------------------

// const content = "Some content!";

// fs.writeFile("output.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("File created");
//   return;
// });

// ------------------ Server (Http) -----------------------

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// ------------------- Path ----------------------------------

// const directory = "user/local";
// const fileName = "output.txt";

// const fullPath = path.join(directory, fileName);

// console.log(fullPath);
