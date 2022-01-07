const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("../schema/schema");
const chalk = require("chalk");
require("dotenv").config();
const cors = require('cors');

const errorMsg = chalk.white.bgRed;
const successMsg = chalk.black.bgGreen;

const app = express();

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)));

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(errorMsg(error))
    : console.log(successMsg(`listening port ${process.env.PORT}`));
});
