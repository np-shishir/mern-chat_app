import express from 'express'
import authRoute from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
const app = express()
dotenv.config()
app.use(express.json())
app.use("/api/auth", authRoute)



const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>{
    console.log("server started at port ", PORT)
    connectDB()
})