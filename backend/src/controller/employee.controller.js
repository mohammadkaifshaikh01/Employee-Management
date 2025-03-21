import EmployeeModel from "../model/employee.model.js";

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

    const newEmp = await EmployeeModel.create({
      name,
      email,
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
  }
};

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

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);
    res.status(201).json({
      message: "Employee Deleted SuccessFully",
      deletedEmployee,
    });
    console.log(deleteEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant Deleted Employee",
    
    });
  }
};

export { addEmployee, getEmployee, deleteEmployee };
