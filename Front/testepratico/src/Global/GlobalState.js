import { useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL, BASE_URL_REPORTS } from "../components/constants/urls"
import useRequestData from "../components/hooks/useRequestData"
import GlobalContext from "./GlobalContext"

export const GlobalState = (props) => {
    const allPerson = useRequestData([], `${BASE_URL}/person`)
    const allCars = useRequestData([], `${BASE_URL}/cars`)
    const allReview = useRequestData([], `${BASE_URL}/review`)
    const allCarsAndDate = useRequestData([], `${BASE_URL}/review/CarDate`)
    // ================ TABELAS =================
    const allCarsReport = useRequestData([], `${BASE_URL_REPORTS}/allCars`)
    const byName = useRequestData([], `${BASE_URL_REPORTS}/byName`)
    const byGender = useRequestData([], `${BASE_URL_REPORTS}/byGender`)
    const byBrands = useRequestData([], `${BASE_URL_REPORTS}/byBrands`)
    const BrandsbyGender = useRequestData([], `${BASE_URL_REPORTS}/BrandsbyGender`)
    const allPersons = useRequestData([], `${BASE_URL_REPORTS}/allPersons`)
    const personAVG = useRequestData([], `${BASE_URL_REPORTS}/personAVG`)
    const reviewDate = useRequestData([], `${BASE_URL_REPORTS}/reviewDate`)
    const reviewBrands = useRequestData([], `${BASE_URL_REPORTS}/reviewBrands`)
    const personReview = useRequestData([], `${BASE_URL_REPORTS}/personReview`)
    // ================ TABELAS =================
    const values = {
        allPerson,
        allCars,
        allReview,
        allCarsAndDate,
        allCarsReport, byName, byGender, byBrands, BrandsbyGender, allPersons, personAVG, reviewDate, reviewBrands, personReview
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}