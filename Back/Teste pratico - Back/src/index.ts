import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { PersonRouter } from './router/personRouter'
import { CarRouter } from './router/carRouter'
import { ReviewRouter } from './router/reviewRouter'
import { ReportRouter } from './router/reportRouter'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/person", PersonRouter)
app.use("/cars", CarRouter)
app.use("/review", ReviewRouter)
app.use("/reports", ReportRouter)