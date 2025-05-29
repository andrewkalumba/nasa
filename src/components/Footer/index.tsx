import { SocialIcon } from "react-social-icons"
import styled from "styled-components"

const StyledContainer = styled.div`
background-color: #F7F7F2;
display: flex;
text-align: center;
justify-content: center;
align-items:center;
flex-direction:column;

div:nth-child(1) {
font-size:1.5rem;
padding: 16px;
}
`
const Footer = () => {
    return (
        <StyledContainer>
        <div>©Nasa to the world</div>
        <div>
        <SocialIcon url="https://www.facebook.com/NASA/" />
        <SocialIcon url="https://www.tiktok.com/discover/nasa-official-account?lang=en" />
        <SocialIcon url="https://www.instagram.com/nasa/?hl=en" />
        <SocialIcon url="https://x.com/NASA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" />
        </div>
        </StyledContainer>
    )
}
export default Footer