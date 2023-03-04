import styled from "styled-components";
import { Cars } from "../../components/registerCars/Cars";

const MainContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:90vh;
width:100vw;
`

export function PageCars() {
    return (
        <MainContainer>
            <Cars />
        </MainContainer>
    )
}