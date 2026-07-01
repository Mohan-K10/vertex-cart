import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./src/db/db.js"
import productRoute from "./src/routes/productRoute.js"
import cors from "cors"

configDotenv()

const app = express()

app.use(cors())
app.use(express.json())

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

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use("/api/product", productRoute)