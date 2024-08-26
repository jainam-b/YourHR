"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const resumeController_1 = require("../controller/resumeController"); // Import your controller functions
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
// Route to create user with resume
router.post('/users', upload.single('resume'), resumeController_1.createUserWithResume);
// Route to get resume (uncomment if needed)
router.get('/users/:userId/resume', resumeController_1.getResume);
exports.default = router;
