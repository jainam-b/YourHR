import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
// function to create user with resume using grid 
export const createUserWithResume = async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).send('No resume file uploaded');
    }
  
    const { buffer, originalname, mimetype } = req.file;
    const { name, email, password } = req.body;
  
  
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }
  
    try {
      const newUser = new UserModel({
        name,
        email,
        password,
        resume: {
          data: buffer,
          contentType: mimetype,
          filename: originalname
        }
      });
  
      await newUser.save();
  
      const userResponse = {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        resumeFilename: newUser.resume?.filename
      };
  
      res.status(201).json({
        message: 'User created and resume uploaded successfully',
        user: userResponse
      });
    } catch (error) {
      console.error('Error creating user and uploading resume:', error);
      res.status(500).json({ error: 'Error creating user and uploading resume' });
    }
  };
  
// api to get resume using user id 
export const getResume = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const user = await UserModel.findById(userId);

    if (!user || !user.resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    res.set('Content-Type', user.resume.contentType);
    res.set('Content-Disposition', `attachment; filename="${user.resume.filename}"`);
    res.send(user.resume.data);
  } catch (error) {
    console.error('Error retrieving resume:', error);
    res.status(500).json({ error: 'Error retrieving resume' });
  }
};
