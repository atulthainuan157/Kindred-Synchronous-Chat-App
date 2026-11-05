import express from 'express'
import mongoose from 'mongoose'
import dns from "node:dns"
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'

dotenv.config()

dns.setServers(['8.8.8.8', '1.1.1.1'])

const app = express()

app.use(
    cors({
        origin: [process.env.ORIGIN],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true
    })
)

app.use('/uploads/profiles', express.static('uploads/profiles'));

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoutes)


const port = process.env.PORT || 3001
const databaseUrl = process.env.DATABASE_URL



const server = app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

mongoose.connect(databaseUrl, { family: 4 }).then(
    () => console.log("Database is successfully connected to mongoDB")).catch(
        (error) => { console.log(error.message) }
    )