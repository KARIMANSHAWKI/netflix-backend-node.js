const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");


const app = express();
dotenv.config();
app.use(express.json());

//routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);




mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));


app.listen(8000, () => {
  console.log("Backend server is running!");
});
