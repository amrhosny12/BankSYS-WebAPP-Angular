const path = require("path");

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/dist/BankSYS-WebAPP"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/BankSYS-WebAPP/index.html"));
});

app.listen(process.env.PORT || 8080);
