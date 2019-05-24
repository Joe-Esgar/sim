const express = require("express");
const app = express();
const massive = require("massive");
app.use(express.json());
require("dotenv").config("massive");

const port = 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
