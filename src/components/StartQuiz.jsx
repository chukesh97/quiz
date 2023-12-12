import {Box,Button,Typography,styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StartBox = styled(Box)`
    height: 60vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem 2rem;
    align-items: felx-start;
    border-radius: 15px;
    border: 1px solid #F2F2F2;
    box-shadow: 25px 25px 15px 6px rgba(0,0,0,0.1);

`;
const StyledButton = styled(Button)`
    width: 40%;
    background-color: #4caf50;
`;

const StartQuiz = () => {
    const navigate = useNavigate();

    const start = () => {
        navigate("/quiz");
        
    }

  return (
    <Container>
       <StartBox>
        <Typography variant="h4">Welcome to the Quiz</Typography>
        <Typography>Try to answer to following code-related question whitin the time limit.</Typography>
        <Typography>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</Typography>
        <StyledButton variant="contained" onClick={start}>Start Quiz</StyledButton>
       </StartBox>
      
    </Container>
  )
}

export default StartQuiz;
