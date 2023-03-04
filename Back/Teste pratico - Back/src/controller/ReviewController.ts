import { Request, Response } from "express";
import { ReviewBusiness } from "../business/ReviewBusiness";
import { BaseError } from "../errors/BaseError";
import { finishReviewDTO, IDateDB, signupReviewDTO } from "../models/Review";

export class ReviewController {
    constructor(
        private reviewBusiness: ReviewBusiness
    ) { }
    signupReview = async (req: Request, res: Response) => {
        try {
            const input: signupReviewDTO = {
                idperson: req.body.idperson,
                idcar: req.body.idcar,
                datestartreview: req.body.datestartreview
            }
            const response = await this.reviewBusiness.signupReview(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    finishReview = async (req: Request, res: Response) => {
        try {
            const input: finishReviewDTO = {
                id: req.body.id,
                dateendreview: req.body.dateendreview
            }
            const response = await this.reviewBusiness.finishReview(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getReview = async (req: Request, res: Response) => {
        try {
            const response = await this.reviewBusiness.getReview()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getCarAndDate = async (req: Request, res: Response) => {
        try {
            const response = await this.reviewBusiness.getCarAndDate()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getDateReviewById = async (req: Request, res: Response) => {
        try {
            const input: IDateDB = {
                id: req.params.id
            }
            const response = await this.reviewBusiness.getDateReviewById(input)
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