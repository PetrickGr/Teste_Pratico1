import { Request, Response } from "express";
import { PersonBusiness } from "../business/PersonBusiness";
import { BaseError } from "../errors/BaseError";
import { signupPersonDTO } from "../models/Person";

export class PersonController {
    constructor(
        private personBusiness: PersonBusiness
    ) { }
    signupPerson = async (req: Request, res: Response) => {
        try {
            const input: signupPersonDTO = {
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender
            }
            const response = await this.personBusiness.signupPerson(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getPersons = async (req: Request, res: Response) => {
        try {
            const response = await this.personBusiness.getPersons()
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