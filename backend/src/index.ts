import express, { Request, Response } from "express"; // Use ES6 import for better type support
import connectDB from "./config/db";
import userRouter from "./routes/user";
import cors from "cors";

const app = express();

// Configure CORS
app.use(
  cors({
    origin:[ "http://localhost:5173","https://yourhr.vercel.app"], 
    methods: ["GET", "POST", "PUT", "DELETE"],  
    credentials: true,  
  })
);

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("YourHR API is running");
});

// Use user routes
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
