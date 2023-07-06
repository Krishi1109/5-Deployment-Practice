const express = require('express')
const path = require("path");
const app = express()

const port = 9000 


__dirname = path.resolve();
// if (process.env.NODE_ENV == "production") {
if ("production"== "production") {
console.log("Hello")
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", 'index.html'))
  })
} else {
  app.get("/", (req, res) => {
    res.send("Done for the day");
  });
}

app.listen(port, () => {
    console.log("Starting on port " + port)
})