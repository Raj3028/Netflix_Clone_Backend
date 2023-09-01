const express = require("express");
const cors = require("cors"); // Fix typo here
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRouters.js");

const app = express();

app.use(cors()); // Fix typo here
app.use(express.json());

mongoose
  .connect("mongodb+srv://raj_3028:SoVKWYnFbvC7Z9Ic@cluster0.pw23ckf.mongodb.net/netflix", {
    useNewUrlParser: true, // Fix typo here
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.use("/", userRoutes);

app.get('/test', (req, res)=>{
  return res.status(200).json({status:true, message: "Server run successfully"})
})

app.listen(5000, console.log("Server started on port 5000"));
