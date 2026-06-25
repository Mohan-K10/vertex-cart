import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./src/db/db.js"

configDotenv()

const app = express()

await connectDB()
.then(
    app.listen( process.env.PORT || 5000 , (req, res)=> {
        console.log("MongoDB succcessfully connected")
    })
)
.catch((err)=> {
    console.log("MongoDB failed to Connect ", err)
    process.exit(1)
})