var compression = require("compression");
const express = require("express");
const path = require("path");
const app = express();
app.use(compression());

const port = process.env.REACT_APP_PORT || 9045;
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log("Web server listening on port %d in %s mode", port);
});

//something change
