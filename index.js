const express = require("express"); // "type": "commonjs"
// import express from "express"; // "type": "module"
const app = express();

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


// Read file
const fs = require("fs");
fs.readFile("./Task/25-01-2023-18.16.txt", "utf-8", (err, data) => {
    console.log(data);
});


// const fs = require("fs");
// fs.readFile("./Task", "utf-8", (err,data) => {
//     console.log(data);
// });





app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
