const express = require("express");
const cors = require("cors"); // Fix typo here
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/UserRouters");

const app = express();

app.use(cors()); // Fix typo here
app.use(express.json());

mongoose.connect("mongodb+srv://raj_3028:SoVKWYnFbvC7Z9Ic@cluster0.pw23ckf.mongodb.net/netflix", {
    useNewUrlParser: true, // Fix typo here
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database : ", err);
  });

app.use("/", userRoutes);

app.listen(3000, console.log("Server started on port 3000"));
