import mongoose from 'mongoose';


const UserShema = new mongoose.Schema({
    
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    
})

const UserModel = mongoose.model("user", UserShema)

export default UserModel;