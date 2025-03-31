const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("./config/configDB");
const Port = process.env.PORT || 5000;
const cors = require("cors");
const gRouter = require("./Routes/getRoutes");
const pRouter = require('./Routes/postRoutes');


dotenv.config();
mongoose;
app.use(express.json());
app.use(cors());
app.use('/get',gRouter);
app.use('/post',pRouter);
app.use(require('./middleware/errorHandler'));

app.listen(Port, () => {
  console.log(`Server is ready On port ${Port}`);
});
