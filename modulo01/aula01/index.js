const express = require("express");

const app = express();

const logMiddleware = (req, res,next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  return next();
};

app.get("/", logMiddleware, (req, res) => {
  return res.send("Ola mundo");
});

app.get("/login/:name", (req, res) => {
  return res.send(`Login ${req.params.name} = ${req.query.lastname}`);
});

app.listen(3333);
