import { Router } from "express";
import { ReportBusiness } from "../business/ReportBusiness";
import { ReportController } from "../controller/ReportController";
import { ReportDatabase } from "../database/ReportDatabase";

export const ReportRouter = Router()

const reportController = new ReportController(
    new ReportBusiness(
        new ReportDatabase()
    )
)
ReportRouter.get("/allCars", reportController.getCars)
ReportRouter.get("/byName", reportController.getAllCarsbyName)
ReportRouter.get("/byGender", reportController.getCarsbyGender)
ReportRouter.get("/byBrands", reportController.getBrandsbyCar)
ReportRouter.get("/BrandsbyGender", reportController.getBrandsbyGender)
ReportRouter.get("/allPersons", reportController.getAllPersons)
ReportRouter.get("/personAVG", reportController.getPersonAVG)
ReportRouter.get("/reviewDate", reportController.getPeriodDate)
ReportRouter.get("/reviewBrands", reportController.getBrandsReview)
ReportRouter.get("/personReview", reportController.getPersonReview)