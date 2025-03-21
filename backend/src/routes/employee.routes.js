import express from "express"
import {addEmployee , deleteEmployee, getEmployee, getEmployeeById, login, updateEmployee} from "../controller/employee.controller.js"

const employeeRoute = express.Router()
employeeRoute.post("/add-employee" , addEmployee)
employeeRoute.get("/" , getEmployee)
employeeRoute.put("/update/:id", updateEmployee)
employeeRoute.get("/:id", getEmployeeById)
employeeRoute.delete("/id", deleteEmployee)
employeeRoute.post("/login", login)

export default employeeRoute