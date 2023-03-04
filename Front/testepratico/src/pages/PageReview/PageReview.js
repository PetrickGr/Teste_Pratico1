import styled from "styled-components";
import { Review } from "../../components/registerReview/Review";

const MainContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:90vh;
width:100vw;
`

export function PageReview() {
    return (
        <MainContainer>
            <Review />
        </MainContainer>
    )
}