import { Request, Response } from "express";
import { CarBusiness } from "../business/CarBusiness";
import { BaseError } from "../errors/BaseError";
import { signupCarsDTO } from "../models/Cars";

export class CarController {
    constructor(
        private carBusiness: CarBusiness
    ) { }
    signupCar = async (req: Request, res: Response) => {
        try {
            const input: signupCarsDTO = {
                idperson: req.body.idperson,
                licenseplate: req.body.licenseplate,
                brands: req.body.brands
            }
            const response = await this.carBusiness.signupCar(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getCars = async (req: Request, res: Response) => {
        try {
            const response = await this.carBusiness.getCars()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
}