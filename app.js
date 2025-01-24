const fs = require("fs");

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const content = "Some content!";

fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("File created");
  return;
});
