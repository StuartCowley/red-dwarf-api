const express = require("express");
const directives = require("./data/directives.json");

const app = express();

app.get("/", (_, res) => {
  res.status(200).send("Infinity welcomes careful drivers");
});

app.get("/directives", (_, res) => {
  res.status(200).json(directives);
});

app.get("/directives/numbered", (_, res) => {
  res.status(200).json({ numberedDirectives: directives.numberedDirectives });
});

app.get("/directives/unnumbered", (_, res) => {
  res
    .status(200)
    .json({ unnumberedDirectives: directives.unnumberedDirectives });
});

app.get("/directives/:directiveNumber", (req, res) => {
  const num = String(req.params.directiveNumber);

  const result = directives.numberedDirectives.find(
    (directive) => directive.directiveNumber === num
  );

  if (result !== undefined) {
    res.status(200).json({ directive: result });
  } else {
    res
      .status(200)
      .send(`No directive number ${num} found, try again smeghead`);
  }
});

module.exports = app;
