const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", taskRoute);

// additional middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

//
// TASK MANAGER
//
// 0:9:30 -  Express SetUp
// 0:18:50 - Routes Folder
// 0:22:50 - Controllers Folder
// 0:28:34 - Postman Setup
// 0:37:42 - Rest API Explanation
// 0:41:42 - MongoDb Explanation and Set Up
// 0:57:17 - Mongoose connection
// 1:16:20 - Mongoose Schema
// 1:42:20 - Mongoose CRUD operations
// 2:20:20 - Put vs Patch
// 2:26:50 - Different Response Style
// 2:32:20 - Route Not Found
// 2:36:35 - Async Wrappers for try/catch
// 2:46:20 - Catching Errors
// 2:52:20 - 404 Custom Errors
// 3:05:20 - Port Variable Setting
