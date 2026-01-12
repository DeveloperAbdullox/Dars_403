import "reflect-metadata"
import "dotenv/config"
import express from "express"
import { AppDataSource } from "./config/data.source.js"


const  app = express()
app.use(express.json())

await AppDataSource.initialize()

const {default: courseRouter} = await import("./features/course.controller.js")
const {default: authorRouter} = await import ("./features/author.controller.js")



app.use(courseRouter)
app.use(authorRouter)


app.listen(5000, () => console.log("Server started 5000 port"))