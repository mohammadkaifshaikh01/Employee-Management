import express from "express"
import {addEmployee , getEmployee} from "../controller/employee.controller.js"

const employeeRoute = express.Router()
employeeRoute.post("/add-employee" , addEmployee)
employeeRoute.get("/" , getEmployee)



export default employeeRoute