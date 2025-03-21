import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password:{
      type: String,
      required: true,
   },
   phone: {
      type: Number,
      required: true
   },
   position: {
      type: String,
      enum: ["Hr", "Manager", "Developer", "Curriculum Engineer"],
      required: true
   },
   profile: {
      type: String,
      required: true
   },
},
   { timestamps: true }
);

const EmployeeModel = mongoose.model("employee", EmployeeSchema)
export default EmployeeModel;
