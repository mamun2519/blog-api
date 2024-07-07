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

app.get("api/v1/articles", (req, res) => {
  const page = +req.query.page ?? 1 ;
  const limit = +req.query.limit ?? 10;
  const sortType = +req.query.sort_type ?? "asc"
  const sortBy = req.query.sort_b ?? "updateAt"
  const searchTerm = req.query.search ?? ""
  res.status(200).json({ path: "/articles", method: "get" });
});
app.listen(4000, () => {
  console.log("server is listerningon port 4000");
});
?