const fs = require("fs");

try {
  const result = fs.readFileSync(__filename, "utf-8");
  console.log(result);
} catch {
  console.lerror(err);
}

try {
  fs.appendFileSync(__filename, '\nconsole.log("Try_catch Sync")');
  console.log("Try_catch is saved");
} catch {
  console.error(err);
}

console.log("Try_catch Sync")