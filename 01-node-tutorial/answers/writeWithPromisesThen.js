const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/temp.txt", "Hi!\n").then(() => {
  return writeFile("./temporary/temp.txt", "How is everything going\n", {
    flag: "a",
  }).then(() => {
    return writeFile("./temporary/temp.txt", "Have a great one!\n", {
      flag: "a",
    })
      .then(() => {
        return readFile("./temporary/temp.txt", "utf8");
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  });
});
