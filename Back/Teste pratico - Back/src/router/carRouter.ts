import { Router } from "express";
import { CarBusiness } from "../business/CarBusiness";
import { CarController } from "../controller/CarController";
import { CarDatabase } from "../database/CarDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const CarRouter = Router()

const carController = new CarController(
    new CarBusiness(
        new CarDatabase(),
        new IdGenerator()
    )
)
CarRouter.post("/signCar", carController.signupCar)
CarRouter.get("/", carController.getCars)