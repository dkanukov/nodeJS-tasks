const fs = require("fs");
const crypto = require("crypto");

if (process.argv.length < 3) {
  console.log("You dont add any args");
  process.exit(1);
}

fs.createReadStream("test-files/cat.jpg")
  .pipe(crypto.createHash("sha256").setEncoding("hex"))
  .on("finish", function () {
    console.log(this.read()); //the hash
  });

// fs.readFile('test-files/cat.jpg', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     process.exit(0);
//   }
//   // console.log(data);
//   console.log(hash.update(data));
// })

console.log(crypto.createHash("sha256"));

console.log("OK");
