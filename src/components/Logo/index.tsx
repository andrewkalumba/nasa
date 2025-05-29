import styled from "styled-components"

const StyledLogo = styled.img`
width: 80px;
height:80px;
`

const Logo = () => {
    return (
        <StyledLogo src="./nasa.jpg" alt="nasa Logo"/>
    )
}

export default Logo