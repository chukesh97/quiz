import { Box,Button, Dialog,Typography,styled } from '@mui/material';

import React from 'react'

const Container = styled(Box)`
  height: 80vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2rem 2rem;
  align-items: center;
`;
const ScoreText = styled(Typography)`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1rem;
`;

const ScoreBoard = ({ open,setOpen,score,setScore,setCurrentQuestionIndex }) => {
    const handelclose = () => {
        setOpen(false); 
    }
    const resetQuiz = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setOpen(false);
    };
  return (
    <Dialog open={open} onClose={handelclose}>
      <Container>
        <Typography variant="h3">Quiz Completed</Typography>
      <ScoreText>Score:{score}</ScoreText>
      <Button onClick={resetQuiz}>Restart Quiz</Button>
      </Container>
    </Dialog>
  )
}

export default ScoreBoard;
