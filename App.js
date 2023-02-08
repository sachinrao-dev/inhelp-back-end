require("dotenv").config();
const cors = require("cors");
const { json } = require("express");
const express = require("express");
const mongooseDB = require("./Users/db/Connection");
const AdminRouter = require("./Users/admin/Routes/Router");

const app = express();
const port = process.env.PORT || 8090;
mongooseDB(process.env.MONGOOSE_URL);

app.use(json());
app.use(cors());
app.use("/inhelp", AdminRouter);

app.listen(port);
