const express = require("express");
const app = express();
require("dotenv").config();
const notFound = require("./middleware/not-found");
const cors = require("cors");

//connect DB
const connectDB = require("./db/connect");

const authenticateUser = require("./middleware/authentication");
//error Handler
const errorHandleMiddleware = require("./middleware/error-handler");

//routers
const authRouter = require("./routes/auth");
const Product = require("./routes/products");
const Animes = require("./routes/animes");
const ContactUs = require("./routes/contact-us");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", authenticateUser, Product);
app.use("/api/v1/animes", authenticateUser, Animes);
app.use("/api/v1/contact-us", authenticateUser, ContactUs);

app.use(notFound);
app.use(errorHandleMiddleware);

const port = process.env.PORT || 3005;

const start = async () => {
  try {
    await connectDB(process.env.MONGOURL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
