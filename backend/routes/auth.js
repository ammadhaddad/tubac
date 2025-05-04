const express = require("express");
const router = express.Router();
const users = require("../user");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful", userId: user.id });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
}); 

module.exports = router;
