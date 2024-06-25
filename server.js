const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const datos = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

app.get("/verificar_certificado/:codigo", (req, res) => {
  const { codigo } = req.params;
  const detalle = datos.filter((data) => data.code == codigo);
  const prd = detalle.length > 0 ? detalle[0] : null;
  res.render("index", { prd });
});

app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
