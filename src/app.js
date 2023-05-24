const express = require("express");
const directives = require("./data/directives.json");

const app = express();

app.get("/", (_, res) => {
  res.status(200).send("Infinity welcomes careful drivers");
});

app.get("/directives/all", (_, res) => {
  res.status(200).json(directives);
});

app.get("/directives/numbered", (_, res) => {
  res.status(200).json({ numberedDirectives: directives.numberedDirectives });
});

app.get("/directives/numbered/:directiveNumber", (req, res) => {
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

app.get("/directives/unnumbered", (_, res) => {
  res
    .status(200)
    .json({ unnumberedDirectives: directives.unnumberedDirectives });
});

app.get("/directives/search-by-word/:word", (req, res) => {
  const results = directives.numberedDirectives.filter((dir) => {
    if (dir.content.match(new RegExp(req.params.word, "gi")) !== null) {
      return dir;
    }
  });

  const unnumberedDirectives = directives.unnumberedDirectives.filter((dir) => {
    if (dir.content.match(new RegExp(req.params.word, "gi")) !== null) {
      return dir;
    }
  });

  if (unnumberedDirectives.length !== 0) {
    unnumberedDirectives.forEach((ref) => {
      results.push(ref);
    });
  }

  res.status(200).json({ directives: results });
});

app.get("/directives/by-series/:series", (req, res) => {
  let series = req.params.series;
  if (!series.match(/^[0-9]+$/i)) {
    res
      .status(200)
      .json({ error: "Must supply a valid numerical value for series number" });
  }
  series = Number(series);

  if (series > 13) {
    res.status(200).json({
      error:
        "Searching for series past 13 has just 2 minor drawbacks... One, there are no more episodes past 'The Promised Land', and two, there are no more episodes past 'The Promised Land'",
    });
  }

  const results = directives.numberedDirectives.filter((dir) => {
    return dir.references.some((ref) => {
      return ref.series === series;
    });
  });

  const unnumberedDirectives = directives.unnumberedDirectives.filter((dir) => {
    return dir.references.some((ref) => {
      return ref.series === series;
    });
  });

  if (unnumberedDirectives.length !== 0) {
    unnumberedDirectives.forEach((ref) => {
      results.push(ref);
    });
  }

  res.status(200).json({ directives: results });
});

module.exports = app;
