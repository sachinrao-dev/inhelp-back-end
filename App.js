require("dotenv").config();
const cors = require("cors");
const { json } = require("express");
const express = require("express");
const mongooseDB = require("./Users/db/Connection");
const AdminRouter = require("./Users/admin/Routes/Router");
const ClientRouter = require("./Users/Client/Routes/Router");
const CommentModule = require("./Users/Client/Controller/CommentModule");

const app = express();
const port = process.env.PORT || 8090;
mongooseDB(process.env.MONGOOSE_URL);

app.use(cors());
app.use(json());
app.use("/inhelp", AdminRouter);
app.use("/inhelp/client", ClientRouter);

app.listen(port);
// CommentModule();
