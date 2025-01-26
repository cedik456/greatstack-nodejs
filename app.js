const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const url = require("url");
const crypto = require("crypto");
const sayHello = require("./greetings");
const math = require("./math");
const lodash = require("lodash");
const readline = require("readline");

// ------------ Read and Write -----------------------

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// ----------------------------------------------------

// const content = "Some content!";

// fs.writeFile("output.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("File created");
//   return;
// });

// ------------------ Server (Http) --------------------

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// ------------------- Path -------------------------------

// const directory = "user/local";
// const fileName = "output.txt";

// const fullPath = path.join(directory, fileName);

// console.log(fullPath);

// --------------------- OS -------------------------------

// console.log("Platform:", os.platform());
// console.log("Architecture:", os.arch());

// const totalMemory = os.totalmem() / (1024 * 1024 * 1024);
// const freeMemory = os.freemem() / (1024 * 1024 * 1024);

// console.log("Total Memory:", totalMemory.toFixed(2), "GB");
// console.log("Free Memory:", freeMemory.toFixed(2), "GB");

// ----------------------- URL -----------------------------

// const myUrl = new URL("https://example.com:8080/path/name?query=hello#hash");
// console.log("Url", myUrl);
// console.log("Host:", myUrl.host);
// console.log("Pathname:", myUrl.pathname);
// console.log("SearchParams:", myUrl.searchParams.get("query"));
// console.log("Username:", myUrl.username);
// console.log("Password:", myUrl.password);

// ------------------------ CRYPTO --------------------------

// const hash = crypto.createHash("sha256");
// hash.update("Hello World");
// const result = hash.digest("hex");

// console.log(result);

// ----------------- CREATING A MODULE -----------------------

// const message = sayHello("Lawrence");
// console.log(message);

// -------------- CREATING MULTIPLE MODULES ------------------

// const sum = math.add(10, 20);
// const diff = math.subtract(20, 10);

// console.log(sum);
// console.log(diff);

// ------------ Installing Packages using NPM -----------------------

// const number = [1, 2, 3, 4, 5];
// const reversed = lodash.reverse(number);

// console.log(reversed);

// STREAMS

// ------------- READABLE STREAMS ----------------------

// const readableStream = fs.createReadStream("example.txt", { encoding: "utf8" });

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// readableStream.on("end", () => {
//   console.log("Finish Reading the file");
// });

// readableStream.on("error", (err) => {
//   console.log("Error:", err);
// });

// ------------- WRITABLE STREAMS ----------------------

// const writableStream = fs.createWriteStream("streams.txt");

// writableStream.write("Hello ");
// writableStream.write("World!");

// writableStream.end();

// writableStream.on("finish", () => {
//   console.log("Finish Writing to the File");
// });

// ------------- PIPE STREAMS ----------------------

// const readableStream = fs.createReadStream("example.txt");
// const writableStream = fs.createWriteStream("example-output.txt");

// readableStream.pipe(writableStream);

// writableStream.on("finish", () => {
//   console.log("Finish Copying Stream");
// });

// ------------- LARGE FILES ----------------------

// const readableStream = fs.createReadStream("example.txt");

// const rl = readline.createInterface({ input: readableStream });

// rl.on("line", (line) => {
//   console.log("Line: ", line);
// });

// rl.on("close", () => {
//   console.log("Finish create lines");
// });

// ------------- CREATING A DIRECTORY ASYNCHRONOUSLY ----------------------

// fs.mkdir("newFolder", (err) => {
//   if (err) {
//     return console.error("Error creating directory: ", err);
//   }
//   console.log("Finish Creating directory");
// });

// ------------- CREATING A DIRECTORY SYNCHRONOUSLY ----------------------

// fs.mkdirSync("newFolder2");
// console.log("Finish creating directory");

// ------------- READING A DIRECTORY ASYNCHRONOUSLY ----------------------

// fs.readdir("./", (err, file) => {
//   if (err) {
//     console.error("Error reading directory: ", err);
//   }
//   console.log("Directory Content: ", file);
// });

// ------------- READING A DIRECTORY SYNCHRONOUSLY ----------------------

// console.log("Directory Contents: ", fs.readdirSync("./"));

// const files = fs.readdirSync("./");
// console.log("Directory Contents: ", files);

// ------------- CHECKING A DIRECTORY SYNCHRONOUSLY ----------------------

// const folderName = "newFolder";

// if (fs.existsSync(folderName)) {
//   console.log("Directory Exists");
// } else {
//   console.log("Directory doesn't exists");
// }

// ------------- DELETING A DIRECTORY ASYNCHRONOUSLY ----------------------

// const folderName = "newFolder";

// fs.rmdir(folderName, (err) => {
//   if (err) {
//     console.error("Error: ", err);
//   }
//   console.log("Deleted Successfully");
// });

// ------------- DELETING A DIRECTORY SYNCHRONOUSLY ----------------------

// const folderName = "newFolder2";

// fs.rmdirSync(folderName);

fs.rm("newDirectory", { recursive: true }, (err) => {
  if (err) {
    return console.error("Error: ", err);
  }
  console.log("Directory Removed");
});
