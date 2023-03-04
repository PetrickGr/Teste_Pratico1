import { ICarsDB } from "../../models/Cars";
import { GENDER, IPersonDB } from "../../models/Person";
import { ILinkIdsDB, IReviewDB } from "../../models/Review";


export const Person: IPersonDB[] = [
    {
        id: "123ABC",
        name: "Nome User01",
        age: 22,
        gender: GENDER.MALE,
    },
    {
        id: "456DEF",
        name: "Nome User02",
        age: 27,
        gender: GENDER.FEMALE
    },
    {
        id: "789GHI",
        name: "Nome User03",
        age: 33,
        gender: GENDER.FEMALE
    },
    {
        id: "1011JKL",
        name: "Nome User04",
        age: 76,
        gender: GENDER.FEMALE
    },
    {
        id: "1223MNO",
        name: "Nome User05",
        age: 16,
        gender: GENDER.MALE
    }
]
export const Cars: ICarsDB[] = [
    {
        id: "IDCARRO01",
        licenseplate: "PLACA CARRO 01",
        brands: "FIAT"
    },
    {
        id: "IDCARRO02",
        licenseplate: "PLACA CARRO 02",
        brands: "FIAT"
    },
    {
        id: "IDCARRO03",
        licenseplate: "PLACA CARRO 03",
        brands: "FORD"
    },
    {
        id: "IDCARRO04",
        licenseplate: "PLACA CARRO 04",
        brands: "RENAULT"
    },
    {
        id: "IDCARRO05",
        licenseplate: "PLACA CARRO 05",
        brands: "FIAT"
    }
]
export const Review: IReviewDB[] = [
    {
        id: "IDReview01",
        datestartreview: "2004-05-20 00:00:00.000",
        dateendreview: null
    },
    {
        id: "IDReview02",
        datestartreview: "2004-05-20 00:00:00.000",
        dateendreview: null
    },
    {
        id: "IDReview03",
        datestartreview: "2004-05-20 00:00:00.000",
        dateendreview: null
    },
    {
        id: "IDReview04",
        datestartreview: "2004-05-20 00:00:00.000",
        dateendreview: null
    }
    ,
    {
        id: "IDReview05",
        datestartreview: "2004-05-20 00:00:00.000",
        dateendreview: null
    }
]
export const Link_Ids: ILinkIdsDB[] = [{
    idperson: "123ABC",
    idcar: "IDCARRO01",
    idreview: "IDReview01"
},
{
    idperson: "456DEF",
    idcar: "IDCARRO02",
    idreview: "IDReview02"
},
{
    idperson: "789GHI",
    idcar: "IDCARRO03",
    idreview: "IDReview03"
},
{
    idperson: "1011JKL",
    idcar: "IDCARRO04",
    idreview: "IDReview04"
},
{
    idperson: "1223MNO",
    idcar: "IDCARRO05",
    idreview: undefined
}
]