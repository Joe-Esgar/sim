const express = require("express");
const app = express();
const massive = require("massive");
app.use(express.json());
require("dotenv").config();
const controller = require("./controller");

console.log(process.env.CONNECTION_STRING);
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("connected to db");
  })
  .catch(err => console.log(err));

app.post("/api/products", controller.create);
app.get("/api/products", controller.getAll);
app.put("/api/products/:id", controller.update);
app.delete("/api/products/:id", controller.delete);

const port = 4000;
app.listen(port, () => console.log(`server listening on port ${port}`));
