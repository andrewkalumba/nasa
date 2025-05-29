import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SpaceImages from '../../components/SpaceImages';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StyledContainer = styled.div <{$height:string}>`
  display: flex;
  flex-direction: column;
  background-color: #4d4c4d;
  align-items: center;
  width: 100%;
  height: ${props => props.$height};
  background-image: url("nasa7.jpg");
  background-size: cover;

  @media screen and (min-width:768px) {
    height: auto;
    background-image: url("nasa8.jpg");
    }
`;

const StyledMain = styled.div<{$height:string}>`
  background-color: #252627;
  height: ${props => props.$height};
  margin: 30px;
  padding: 40px;
  border-radius: 2rem;
  text-align: center;
  background-image: Url("nasa8.jpg");
  background-size: cover;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

const StyledButton = styled.button`
  border-radius: 10px;
  border: 1px solid #AF3B6E;
  padding: 12px;
  margin-bottom: 60px;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: inherit;
  background: linear-gradient(145deg, #1e1e1e, #2a2a2a);
  color: #F7F7F2;
  cursor: pointer;
  box-shadow: 
    6px 6px 14px rgba(0, 0, 0, 0.6),
    -4px -4px 10px rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #2a2a2a, #1e1e1e);
    box-shadow: 
      3px 3px 6px rgb(158, 206, 245),
      -2px -2px 6px rgba(255, 255, 255, 0.04);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 
      inset 2px 2px 5px rgba(255, 255, 255, 0.98),
      inset -2px -2px 5px rgba(255, 255, 255, 0.02);
  }
`;

const StyledImages = styled(motion.div) <{$display:string}>`
  background-color: #454545;
  display:${props => props.$display};
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  padding-bottom: 16px;

  @media screen and (min-width:768px) {
  display:flex
  }
`;

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Home = () => {
  const Images = [
    "nasa1.jpg", "nasa9.jpg", "nasa3.jpg", "nasa4.jpg", "nasa5.jpg", "nasa6.jpg", "nasa7.jpg", "nasa10.jpg"];

  const [images, setImages] = useState<string[]>(Images);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(prev => shuffleArray(prev));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledContainer $height='100vh' >
      <StyledMain $height='40vh'>
        <Link to="/mars"><StyledButton>View Mars Rover Photos</StyledButton></Link>
        <Link to="/picture"><StyledButton>Picture of the Day</StyledButton></Link>
      </StyledMain>

      <StyledImages layout $display='none'>
        {images.map((item, index) => (
          <motion.div key={index} layout transition={{ duration: 0.1 }}>
            <SpaceImages image={item} />
          </motion.div>
        ))}
      </StyledImages>
    </StyledContainer>
  );
};

export default Home;
