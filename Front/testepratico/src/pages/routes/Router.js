import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../../components/Header"
import { PageCars } from "../PageCars/PageCars"
import { PagePerson } from "../PagePerson/PagePerson"
import { PageReport } from "../PageReport/PageReport"
import { PageReview } from "../PageReview/PageReview"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<PagePerson />} />
                <Route path="cars" element={<PageCars />} />
                <Route path="review" element={<PageReview />} />
                <Route path="report" element={<PageReport />} />
            </Routes>
        </BrowserRouter>
    )
}