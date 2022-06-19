const mongoose =require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{type : String},
    password: {type:String},
    email:{type:String, required: true, unique:true ,index:true},
});
