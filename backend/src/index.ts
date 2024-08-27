import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import userRouter from "./routes/user";

const app = express();

// Configure CORS
const corsOptions = {
  origin: 'https://yourhrbackend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Root endpoint
app.get("/", (req, res) => {
  res.send("YourHR API is running");
});

// Use user routes
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
