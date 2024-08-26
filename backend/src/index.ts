import express, { Request, Response } from "express"; // Use ES6 import for better type support
import connectDB from "./config/db";
import userRouter from "./routes/user"
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("YourHR API is running");
});
app.use("/user",userRouter)

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
