const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

// @ts-ignore
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the task manager server!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// ERROR HANDLING

// 404 error handler
// @ts-ignore
app.use((req, res, next) => {
  const error = new Error(
    "404 NOT FOUND: Are you sure you are supposed to be here???"
  );
  res.status = 404;
  next(error);
});

// general error handler
// @ts-ignore
app.use((error, req, res, next) => {
  res.status = error.status || 500;
  res.json({
    error: {
      message: error.message,
    },
  });
});
