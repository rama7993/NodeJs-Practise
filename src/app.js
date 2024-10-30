const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Sahiti",
    lastName: "Priya",
    username: "Sahiti1234",
    email: "priya@1234gm.com",
    password: "1234567890",
  });

  await user.save();
  res.send("User added!");
});

const port = process.env.PORT || 3000;
connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  })
  .catch(() => {
    console.log("Database connection failed..");
  });
