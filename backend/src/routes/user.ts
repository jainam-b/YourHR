import express,{ Request, Response } from "express"
const router=express.Router();
import { registerUser } from "../controller/UserController";
router.post("/create",registerUser) 

export default router;