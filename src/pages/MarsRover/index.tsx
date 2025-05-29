import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../DaysPicture';

interface Photo {
  id: number
  img_src: string
  earth_date: string
  rover: { name: string, status: string }
  camera: { full_name: string }
}

interface NASA {
  photos: Photo[];
}

const StyledContainer = styled.div <{ $bgcolor: string }>`
background-color: ${props => props.$bgcolor};
display: flex;
flex-direction: column;
justify-content: space-between;
gap:10px; 
align-items: center;
}
`
const StyledTitle = styled.h1`
font-size: 2rem;
`
const StyledMainContent = styled.div` 
display:flex;
justify-content: center;
align-items: center;
gap: 10px;
flex-wrap: wrap;

img {
border-radius: 16px;
}
`

const StyledPhotoCard = styled.div`
background-color: lch(16 6.36 27.79 / 0.16);
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
padding: 16px;
`

const MarsRover = () => {
  const [photoData, setphotoData] = useState<NASA | null>(null)

  const API_ENDPOINT = ('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=dxHeTaPx8okUAT8JAhAWLl9y39k2FPhN9BFQxNms')

  const FetchAPI = async () => {
    try {
      let response = await fetch(API_ENDPOINT);
      let data = await response.json();
      //console.log(data)
      setphotoData(data)

    } catch (error) {
      console.log(`The error is ${error}`)
    }
  }

  useEffect(() => {
    FetchAPI();
  }, [])

  const navigate = useNavigate(); //Hook to navigate programmatically
  const handleClick = () => {
    navigate(-1); // Navigate to the previous page (go back)
  };

  return (
    <StyledContainer $bgcolor=' #5f9ea0'>
      <StyledTitle>Mars Rover Photos</StyledTitle>
      <StyledButton $Weight={300} onClick={handleClick}>Back</StyledButton>

      <StyledMainContent>
        {photoData ? (photoData.photos.map((item: Photo, index: number) => (
          <StyledPhotoCard key={index}>
            <img src={item.img_src} width={200} height={200} alt={`Mars by ${item.rover.name}`} />
            <p><strong>Rover:</strong> {item.rover.name}</p>
            <p><strong>Camera:</strong> {item.camera.full_name}</p>
            <p><strong>Earth Date:</strong> {item.earth_date}</p>
            <p><strong>Status:</strong>{item.rover.status}</p>
          </StyledPhotoCard>
        ))
        ) : (
          <p>No photos available.</p>
        )}
      </StyledMainContent>
    </StyledContainer>
  );
}

export default MarsRover;