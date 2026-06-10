const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to gym shark");
});

app.get("/api/signup", (req, res) => {
    res.send("Signup route is working");
});

app.get("/api/login", (req, res) => {
    res.send("Login route is working");
});

app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
});

