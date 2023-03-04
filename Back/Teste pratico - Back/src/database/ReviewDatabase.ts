import { ICarsDB } from "../models/Cars";
import { carAndDateDB, finishReviewDTO, ILinkIdsDB, IReviewDB, Link, Review } from "../models/Review";
import { BaseDatabase } from "./BaseDatabase";

export class ReviewDatabase extends BaseDatabase {
    public static Reviews = "reviews"
    public static Cars = "cars"
    public static Link_Ids = "link_ids"

    public toReviewDBModel = (review: Review): IReviewDB => {
        const reviewDB: IReviewDB = {
            id: review.getId(),
            datestartreview: review.getdateStartReview(),
        }
        return reviewDB
    }
    public toLinkDBModel = (link: Link): ILinkIdsDB => {
        const linkDB: ILinkIdsDB = {
            idreview: link.getidReview(),
            idcar: link.getidCar(),
            idperson: link.getidPerson()
        }
        return linkDB
    }

    createReview = async (review: Review): Promise<void> => {
        const reviewDB = this.toReviewDBModel(review)
        await BaseDatabase
            .connection()
            .insert(reviewDB)
            .into(ReviewDatabase.Reviews)
    }
    getDateReviewById = async (id: string): Promise<IReviewDB> => {
        const result: IReviewDB[] = await BaseDatabase.connection()
            .select("*")
            .from(ReviewDatabase.Reviews)
            .where({ id })
        return result[0]
    }
    getCarPersonById = async (idPerson: string): Promise<ICarsDB> => {
        const result: ICarsDB[] = await BaseDatabase.connection()
            .select("*")
            .from(ReviewDatabase.Link_Ids)
            .where({ idPerson })
        return result[0]
    }
    finishReview = async (id: string, dateEnd: string): Promise<void> => {
        await BaseDatabase.connection()
            .from(ReviewDatabase.Reviews)
            .update({
                dateendreview: dateEnd
            })
            .where({ id })
    }
    linkReviewCar = async (idreview: string, idcar: string, idperson: string): Promise<void> => {
        await BaseDatabase.connection()
            .insert({
                idreview,
                idcar,
                idperson
            })
            .into(ReviewDatabase.Link_Ids)
    }
    getAllReview = async (): Promise<IReviewDB[] | undefined> => {
        const result: IReviewDB[] = await BaseDatabase.connection()
            .select("*")
            .from(ReviewDatabase.Reviews)
        const showReview = result.map((review) => {
            return ({
                id: review.id,
                datestartreview: review.datestartreview,
                dateendreview: review.dateendreview
            })
        })
        return showReview
    }
    getCarAndDate = async (): Promise<carAndDateDB[] | undefined> => {
        const result: carAndDateDB[] = await BaseDatabase.connection()
            .select(`${ReviewDatabase.Cars}.licenseplate`, `${ReviewDatabase.Reviews}.id`)
            .from(ReviewDatabase.Link_Ids)
            .innerJoin(`${ReviewDatabase.Cars}`, `${ReviewDatabase.Cars}.id`, '=', `${ReviewDatabase.Link_Ids}.idcar`)
            .innerJoin(`${ReviewDatabase.Reviews}`, `${ReviewDatabase.Reviews}.id`, '=', `${ReviewDatabase.Link_Ids}.idreview`)
            .groupBy(`${ReviewDatabase.Cars}.licenseplate`, `${ReviewDatabase.Reviews}.id`)
        return result

    }
}