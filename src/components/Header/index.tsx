import styled from "styled-components"
import Logo from "../Logo"

const StyledContainer = styled.div`
display: flex;
background-color: #F7F7F2;
`
const StyledTitle = styled.h1`
    font-size: 1rem;
    flex: 0 0 60%;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
         flex: 0 0 80%;
    }
`

const Header = () => {
    return (
        <StyledContainer>
            <Logo />
            <StyledTitle>National Aeronautics and Space Administration</StyledTitle>
        </StyledContainer>
    )
}
export default Header