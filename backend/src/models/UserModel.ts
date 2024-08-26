import mongoose , {Schema,Document, mongo}from "mongoose";
 import bcrypt from "bcrypt"
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    resume: string; 
  }

const UserSchema:Schema<IUser>=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    },
})

UserSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (err) {
      next();
    }
  });

const UserModel=mongoose.model<IUser>("User",UserSchema);
export default UserModel;
  


