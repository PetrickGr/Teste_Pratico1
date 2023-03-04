import { Router } from "express";
import { ReviewBusiness } from "../business/ReviewBusiness";
import { ReviewController } from "../controller/ReviewController";
import { ReviewDatabase } from "../database/ReviewDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const ReviewRouter = Router()

const reviewController = new ReviewController(
    new ReviewBusiness(
        new ReviewDatabase(),
        new IdGenerator()
    )
)
ReviewRouter.post("/signReview", reviewController.signupReview)
ReviewRouter.put("/finish", reviewController.finishReview)
ReviewRouter.get("/", reviewController.getReview)
ReviewRouter.get("/CarDate", reviewController.getCarAndDate)
ReviewRouter.get("/CarID/:id?", reviewController.getDateReviewById)
