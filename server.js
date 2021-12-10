import express from "express";
import {router as studentRouter} from "./routes/students.route.js"
import bodyParser from "body-parser";

const app = express()
const server = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/students", studentRouter);


app.listen( server, console.log(`"server running  ${server} "`))
