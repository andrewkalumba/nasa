import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface DaysPictureProps {
    date: string
    explanation: string
    media_type: string
    title: string
    url: string
}

const StyledMain = styled.div`
background-color: #5f9ea0;
text-align: center;
align-items:center;
padding:15px;
margin:30px;
border: 2px solid #FFFFFF;
border-radius: 10px;

div:nth-of-type(2) {
font-size:1.2rem;
padding:16px;
}
`

const StyledPageTitle = styled.h3`
font-size: 1.5rem;
`

export const StyledButton = styled.button <{ $Weight: number }>`
background-color: #1a1a1a;
color: #F7F7F2;
border-radius: 8px;
border: 1px solid transparent;
padding: 16px;
font-size: 1rem;
font-weight: ${props => props.$Weight};
font-family: inherit;
cursor: pointer;
transition: border - color 0.25s;
margin-bottom:25px;

&:hover {
background-color: grey; 
}
`

const DaysPicture = () => {
    const [image, setImage] = useState<DaysPictureProps | null>(null)

    const Navigate = useNavigate()

    const handleClick = () => {
        Navigate(-1)
    }

    const API_KEY = import.meta.env.VITE_NASA_API_KEY;
    const API_ENDPOINT = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

    const FetchAPI = async () => {
        try {
            let response = await fetch(API_ENDPOINT);
            let data = await response.json();
            //console.log(data)
            setImage(data)

        } catch (error) {
            console.log(`Data not found ${error}`)
        }
    }

    useEffect(() => {
        FetchAPI()
    }, []);

    return (
        <StyledMain >
            <StyledPageTitle>NASA Best Picture of the day!!!</StyledPageTitle>
            {image &&
                <>
                    <div> {image.date}</div>
                    <p>{image.title}</p>
                    <p>{image.explanation}</p>
                    <img src={image.url} width={300} height={200} alt="title"></img>
                    <div>{image.media_type}</div>
                </>
            }
            <StyledButton $Weight={500} onClick={handleClick}>Back</StyledButton>
        </StyledMain>
    )
}
export default DaysPicture