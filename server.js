const express = require("express");
const userRoutes = require("./src/routes/user.routes");

const app = express();

app.use(express.json());

// simple health check
app.get("/", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

// user routes
app.use("/api/users", userRoutes);

// export app for testing
module.exports = app;

// start server only when not in test mode
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
