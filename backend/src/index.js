import express from 'express'
import authRoute from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
const app = express()
dotenv.config()
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/message", messageRoute)
app.use(cookieParser)


const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>{
    console.log("server started at port ", PORT)
    connectDB()
})