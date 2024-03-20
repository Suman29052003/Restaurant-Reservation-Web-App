import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnection } from "./db/dbConnection.js";
import { errorHandlerMiddleWare } from "./Error Handling/errorHandler.js";
import reservationRoutes from "./routes/reservationRoutes.js"

const app = express();
dotenv.config({path: './.env'})

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    methods : ['POST'],
    Credential : true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/reservation",reservationRoutes)
dbConnection()

app.use(errorHandlerMiddleWare)
export default app;