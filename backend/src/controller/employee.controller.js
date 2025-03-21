import EmployeeModel from "../model/employee.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const addEmployee = async (req, res) => {
  try {
    const { name, email, phone, position, profile } = req.body;
    console.log(name, email, phone, position, profile);

    if (!name || !email || !phone || !position) {
      return res.status(400).json({
        message: "Please Fill All Fields",
      });
    }


    //  const filePath = req.file?.path;

    //  if (!filePath) {
    //    return res.status(501).json({
    //      message: "File is required",
    //      success: false,
    //    });
    //  }
    //  console.log("filepath", filePath);

    //  const cloudinaryURL = await uploadOnCloudinary(filePath);

    //  if (!cloudinaryURL?.url) {
    //    return res.status(501).json({
    //      message: "getting error while uploading",
    //      success: false,
    //    });
    //  }
    let pass = await bcrypt.hash(email, 8);
    const newEmp = await EmployeeModel.create({
      name,
      email,
      password: pass,
      phone,
      position,
      profile:
        "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
    });
    console.log(newEmp);

    return res.status(201).json({
      message: "User Added SuccessFully..",
      newEmp,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emp = await EmployeeModel.find({ email });
    if (!emp) {
      return res.status(400).json({ message: "Employee with email doesn't exist" })
    }

    const pass = await bcrypt.compare(password, emp.password);
    if (!pass) {
      return res.status(400).json({ message: "Invalid Credential" })
    }

    const token = jwt.sign({ id: emp._id, email: emp.email, position: emp.position }, "thisisyoursecret", { expiresIn: "7d" });
    console.log("Login Successfull")
    res.status(200).json({ message: "Login Successfull" }, token)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to login, please try again..." })
  }
}

const getEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.find();
    console.log(employee);
    return res.status(201).json({
      employee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Can Not Fetch Data Please Try Again",
    });
  }
};

const getEmployeeById = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await EmployeeModel.findById(id);
    console.log(employee);
    return res.status(201).json({
      employee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Can Not Fetch Data Please Try Again",
    });
  }
};

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);
    res.status(201).json({
      message: "Employee Deleted SuccessFully",
      deletedEmployee,
    });
    // console.log(deleteEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant Deleted Employee, try Again",
    });
  }
};

const updateEmployee = async (req, res) => {

  const id = req.params.id
  try {
    const { name, email, phone, position, profile } = req.body;
    const emp = await EmployeeModel.findById(id)
    if (name) {
      emp.name = name;
    }
    if (email) {
      emp.email = email;
    }
    if (phone) {
      emp.phone = phone;
    }
    if (position) {
      emp.position = position;
    }
    if (profile) {
      emp.profile = profile;
    }

    await EmployeeModel.findByIdAndUpdate(id, emp);
    res.status(200).json({
      message: "Employee Updated",
      emp
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Can't Updated Employee"
    })
  }
}

export { addEmployee, getEmployee, deleteEmployee, updateEmployee, getEmployeeById ,login};
