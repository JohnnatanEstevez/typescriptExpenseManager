import controllerFunction from "./controller";

const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3001;

app.get("/", controllerFunction);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
