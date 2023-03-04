import { Router } from "express";
import { PersonBusiness } from "../business/PersonBusiness";
import { PersonController } from "../controller/PersonController";
import { PersonDatabase } from "../database/PersonDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const PersonRouter = Router()

const personController = new PersonController(
    new PersonBusiness(
        new PersonDatabase(),
        new IdGenerator()
    )
)
PersonRouter.post("/signup", personController.signupPerson)
PersonRouter.get("/", personController.getPersons)