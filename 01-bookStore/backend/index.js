import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import mongoDBURL from './config.js'
import Book from "./models/bookModel.js";
import router from "./routes/booksRoute.js"


const app = express()
const port = 5555

// middleware for parsing request body
app.use(express.json())

// middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors())
// Option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.get("/", (req, res) => {
    res.send("api working")
})

app.use("/books", router)


mongoose.connect(mongoDBURL).then(() => {
    console.log("connected to mongoDB")
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})