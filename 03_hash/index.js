const fs = require("fs");
const crypto = require("crypto");

if (process.argv.length < 3) {
  console.log("You dont add any args");
  process.exit(1);
}

const arg = process.argv[2];

if (!fs.existsSync(arg)) {
  console.error(`No file ${arg}`);
  process.exit(100);
} else if (!fs.existsSync(`${arg}.sha256`)) {
  console.error(`No file ${arg}.sha256`);
  process.exit(1001);
}

const fileData = fs.readFileSync(process.argv[2], null);
const comparator = fs.readFileSync(`${process.argv[2]}.sha256`, "utf-8").trim();
const hash256 = crypto.createHash("sha256");
const fileHash = hash256.update(fileData).digest("hex");

if (comparator === fileHash) {
  console.log("Same hash");
  process.exit(102);
} else {
  console.log("Different hash");
  process.exit(0);
}
