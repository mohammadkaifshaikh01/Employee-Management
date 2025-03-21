import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true , unique : true},
   phone: { type: Number, required: true },
   position: { type: String, enum:["Hr" , "Manager" , "Developer"  , "Curriculum Engineer" ], required: true },
   profile: { type: String, required: true },
}, { timestamps: true });
EmployeeSchema.index({name : 1})
const EmployeeModel = mongoose.model("employee" , EmployeeSchema)
export default EmployeeModel;
