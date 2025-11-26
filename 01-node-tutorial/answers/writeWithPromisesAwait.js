const { writeFile, readFile } = require("fs").promises;
const writer = async () => {
  try {
    await writeFile("./temporary/temp.txt", "Hi!\n");
    await writeFile("./temporary/temp.txt", "How is everything going\n", {
      flag: "a",
    });

    await writeFile("./temporary/temp.txt", "Have a great one!\n", {
      flag: "a",
    });
  } catch (err) {
    console.log("Error", err);
  }
};
const reader = async () => {
  try {
    const data = await readFile("./temporary/temp.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log("Error", err);
  }
};
const readWrite = async () => {
  await writer();
  await reader();
};
readWrite();
