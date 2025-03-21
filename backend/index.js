import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./src/config/ConnectDb.js"
import employeeRoute from "./src/routes/employee.routes.js"

const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 5000

app.use("/emp" , employeeRoute)

app.listen(PORT , async()=>{
   console.log(`Server Is Running On Port ${PORT}`)
   ConnectDB()
})