import { ReviewDatabase } from "../database/ReviewDatabase";
import { ParamsError } from "../errors/ParamsError";
import { responseSign, responseSignID } from "../models/Person";
import { finishReviewDTO, IDateDB, Review, signupReviewDTO } from "../models/Review";
import { IdGenerator } from "../services/IdGenerator";

export class ReviewBusiness {
    constructor(
        private reviewDatabase: ReviewDatabase,
        private idGenerator: IdGenerator
    ) { }

    signupReview = async (input: signupReviewDTO) => {
        let { idperson, idcar, datestartreview } = input
        if (typeof datestartreview !== "string") {
            throw new ParamsError("Insira uma data valida!")
        }
        const id = this.idGenerator.generate()
        const review = new Review(
            id,
            datestartreview
        )
        await this.reviewDatabase.createReview(review)
        await this.reviewDatabase.linkReviewCar(id, idcar, idperson)
        const response: responseSignID = {
            message: "Cadastro realizado com sucesso",
            id: `IDREVIEW:${id}`
        }
        return response
    }

    finishReview = async (input: finishReviewDTO) => {
        let { id, dateendreview } = input
        if (typeof dateendreview !== "string") {
            throw new ParamsError("Insira uma data valida!")
        }
        await this.reviewDatabase.finishReview(id, dateendreview)
        const response: responseSign = {
            message: "Data adicionada com sucesso"
        }
        return response
    }
    getReview = async () => {
        const persons = await this.reviewDatabase.getAllReview()
        return persons
    }
    getCarAndDate = async () => {
        const review = await this.reviewDatabase.getCarAndDate()
        return review
    }
    getDateReviewById = async (input: IDateDB) => {
        let { id } = input
        const review = await this.reviewDatabase.getDateReviewById(id)
        return review
    }

}