const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api/pickups", require("./routes/pickupRoutes"));
app.use("/api/opportunities", require("./routes/opportunityRoutes"));
app.use("/api/stats", require("./routes/statRoutes"));

app.get("/", (req, res) => {
  res.send("✅ WasteZero MongoDB Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
