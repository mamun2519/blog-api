const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAMl = require("yamljs");
//* yml load path name
// const swaggerDoc = YAMl.load("yaml-pathname");

const app = express();
app.use(express.json());
// app.use("/docs",swaggerUI.server,  swaggerUI.setup(swaggerDoc));

app.get("/health", (_req, res) => {
  res.status(200).json({
    health: "OK",
  });
});

app.listen(4000, () => {
  console.log("server is listerningon port 4000");
});
