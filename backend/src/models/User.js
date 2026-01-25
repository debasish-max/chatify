import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    profilePic:{
        type: String,
        default: ""
    },
  }, 
  { timestamps: true } // automatically create createdAt and updatedAt fields
);
// Create a model from the schema
const User = mongoose.model("User", userSchema);

export default User;