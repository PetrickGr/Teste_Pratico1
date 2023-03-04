import { Request, Response } from "express";
import { ReportBusiness } from "../business/ReportBusiness";
import { BaseError } from "../errors/BaseError";
import { iPeriodDateDTO } from "../models/Report";

export class ReportController {
    constructor(
        private reportBusiness: ReportBusiness
    ) { }
    // 1 - CARROS
    getCars = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getAllCars()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getAllCarsbyName = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getAllCarsbyName()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getCarsbyGender = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getCarsbyGender()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getBrandsbyCar = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getBrandsbyCar()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getBrandsbyGender = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getBrandsbyGender()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }

    // 2 - PESSOAS
    getAllPersons = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getAllPersons()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getPersonAVG = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getPersonAVG()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }

    // 3 - REVISÕES 

    getPeriodDate = async (req: Request, res: Response) => {
        try {
            const input: iPeriodDateDTO = {
                datestartreview: req.body.datestartreview,
                dateendreview: req.body.dateendreview
            }
            const response = await this.reportBusiness.getPeriodDate(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getBrandsReview = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getBrandsReview()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getPersonReview = async (req: Request, res: Response) => {
        try {
            const response = await this.reportBusiness.getPersonReview()
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