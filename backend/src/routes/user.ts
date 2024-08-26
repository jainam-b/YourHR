import express from 'express';
import multer from 'multer';
import { createUserWithResume, getResume } from '../controller/resumeController'; // Import your controller functions
import UserModel from '../models/UserModel';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Route to create user with resume
router.post('/users', upload.single('resume'), createUserWithResume);

// Route to get resume (uncomment if needed)
router.get('/users/:userId/resume', getResume);

export default router;
