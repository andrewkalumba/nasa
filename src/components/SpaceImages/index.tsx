import styled from "styled-components";
// import { screens } from "../../utils/breakPoints";

export interface ImageProp {
    image:string;
}
 const StyledImg = styled.img`
 display: none;
 border-radius: 20px;

 @media screen and (min-width: 768px) {
 display: flex; 
}
 `

const SpaceImages = ({image}:ImageProp) => {
    return (
        <StyledImg src={`/${image}`} alt="space images" width={300} height={200} />
    )
}

export default SpaceImages