const args = process.argv.slice(2);
const [url, path] = [args[0], args[1]];
const fs = require("fs");

const request = require("request");
request(url, (error, response, body) => {
  if (error) console.log("response:", response, "error:", error); // Print the error if one occurred

  fs.writeFile(path, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
