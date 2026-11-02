const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("BlogSphere Backend Server is Running!");
});

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        message: "BlogSphere API is working successfully!"
    });
});

// Server listener
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
