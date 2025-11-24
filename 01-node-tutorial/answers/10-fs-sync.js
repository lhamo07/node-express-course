const { writeFileSync, readFileSync } = require("fs");
writeFileSync("./temporary/fileA.txt", "Hi there!\n");
writeFileSync("./temporary/fileA.txt", "Learning Node is fun!\n", {
  flag: "a",
});
writeFileSync("./temporary/fileA.txt", "All the best!", { flag: "a" });

const data = readFileSync("./temporary/fileA.txt", "utf8");
console.log(data);
