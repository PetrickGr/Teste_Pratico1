import { useContext, useState } from "react"
import styled from "styled-components"
import { Report } from "../../components/reports/Report"
import GlobalContext from "../../Global/GlobalContext"

const MainContainer = styled.div`
`

export function PageReport() {
    const { allCarsReport, byName, byGender, byBrands, BrandsbyGender, allPersons, personAVG, reviewDate, reviewBrands, personReview } = useContext(GlobalContext)
    // ** Grafico esta funcionando, porem não possui informações suficientes para conseguir efetuar um grafico
    // const [relatorio1, setRelatorio1] = useState({
    //     labels: allCarsReport.map((cars) => cars.licenseplate),
    //     datasets: [{
    //         labels: "Placas dos carros",
    //         data: allCarsReport.map((cars) => cars.brands)
    //     }]
    // })
    // ** Grafico esta funcionando, porem não possui informações suficientes para conseguir efetuar um grafico
    // const [relatorio2, setRelatorio2] = useState({
    //     labels: [],
    //     datasets:
    // })
    const [relatorio3, setRelatorio3] = useState({
        labels: byGender.map((gender) => gender.gender),
        datasets: [{
            label: "Generos",
            data: byGender.map((gender) => gender.count)
        }]
    })
    const [relatorio4, setRelatorio4] = useState({
        labels: byBrands.map((brands) => brands.brands),
        datasets: [{
            label: "Marcas",
            data: byBrands.map((brands) => brands.total)
        }]
    })
    console.log(BrandsbyGender)
    const [relatorio5, setRelatorio5] = useState({
        labels: BrandsbyGender.map((gender) => gender.gender),
        datasets: [{
            label: "Marcas order Mulher/Homem",
            data: BrandsbyGender.map((gender) => gender.count)
        }]
    })
    // const [relatorio6, setRelatorio6] = useState({
    //     labels: [],
    //     datasets:
    // })
    // console.log(Math.round(personAVG))
    const [relatorio7, setRelatorio7] = useState({
        labels: personAVG.map((gender) => gender.gender),
        datasets: [{
            label: "Idade media(AVG)",
            data: personAVG.map((gender) => (gender.AVG))
        }]
    })
    // console.log(reviewDate)
    // const [relatorio8, setRelatorio8] = useState({
    //     labels: reviewDate.map((gender) => gender.name),
    //     datasets: [{
    //         label: "Marcas order Mulher/Homem",
    //         data: reviewDate.map((gender) => (gender.AVG))
    //     }]
    // })
    console.log(reviewBrands)
    const [relatorio9, setRelatorio9] = useState({
        labels: reviewBrands.map((gender) => gender.brands),
        datasets: [{
            label: "Pessoas com maior nº de revisões",
            data: reviewBrands.map((gender) => (gender.count))
        }]
    })
    // const [relatorio10, setRelatorio10] = useState({
    //     labels: [],
    //     datasets:
    // })


    return (
        <MainContainer>
            RELATORIO 1-C
            <div style={{ width: 1000 }}>
                <Report charData={relatorio3} />
            </div>
            RELATORIO 1-D
            <div style={{ width: 1000 }}>
                <Report charData={relatorio4} />
            </div>
            RELATORIO 1-E
            <div style={{ width: 1000 }}>
                <Report charData={relatorio5} />
            </div>
            RELATORIO 2-B
            <div style={{ width: 1000 }}>
                <Report charData={relatorio7} />
            </div>
            RELATORIO 3-C
            <div style={{ width: 1000 }}>
                <Report charData={relatorio9} />
            </div>
        </MainContainer>
    )
}