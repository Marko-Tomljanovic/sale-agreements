const express = require("express");
const cors = require("cors");
const kupoprodajniUgovoriRouter = require("./src/routes/kupoprodajniUgovori.route");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/kupoprodajni-ugovori", kupoprodajniUgovoriRouter);

const port = process.env.PORT || "5000";
app.listen(port, () => console.log("Server started on port " + port));
