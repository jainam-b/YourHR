"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResume = exports.createUserWithResume = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
// function to create user with resume using grid 
const createUserWithResume = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!req.file) {
        return res.status(400).send('No resume file uploaded');
    }
    const { buffer, originalname, mimetype } = req.file;
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }
    try {
        const newUser = new UserModel_1.default({
            name,
            email,
            password,
            resume: {
                data: buffer,
                contentType: mimetype,
                filename: originalname
            }
        });
        yield newUser.save();
        const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            resumeFilename: (_a = newUser.resume) === null || _a === void 0 ? void 0 : _a.filename
        };
        res.status(201).json({
            message: 'User created and resume uploaded successfully',
            user: userResponse
        });
    }
    catch (error) {
        console.error('Error creating user and uploading resume:', error);
        res.status(500).json({ error: 'Error creating user and uploading resume' });
    }
});
exports.createUserWithResume = createUserWithResume;
// api to get resume using user id 
const getResume = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const user = yield UserModel_1.default.findById(userId);
        if (!user || !user.resume) {
            return res.status(404).json({ error: 'Resume not found' });
        }
        res.set('Content-Type', user.resume.contentType);
        res.set('Content-Disposition', `attachment; filename="${user.resume.filename}"`);
        res.send(user.resume.data);
    }
    catch (error) {
        console.error('Error retrieving resume:', error);
        res.status(500).json({ error: 'Error retrieving resume' });
    }
});
exports.getResume = getResume;
