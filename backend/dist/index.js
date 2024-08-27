"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
// Configure CORS
const corsOptions = {
    origin: 'https://yourhr-jainam.vercel.app',
};
app.use((0, cors_1.default)(corsOptions));
// Middleware to parse JSON
app.use(express_1.default.json());
// Connect to MongoDB
(0, db_1.default)();
// Root endpoint
app.get("/", (req, res) => {
    res.send("YourHR API is running");
});
// Use user routes
app.use("/", user_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
