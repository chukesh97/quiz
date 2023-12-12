import React, { useState } from "react";
import { questionDataArray } from "./Data";
import ScoreBoard from "./ScoreBoard";
import { Box, Button, ListItem,Typography, styled } from "@mui/material";
import Nav from "./Nav";

const Wrapper = styled(Box)`
  background-color: #4caf50;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Container = styled(Box)`
  background-color: #fff;
  width: 50%;
  height: 70%;
  margin-top: 10%;
  border-radius: 10px;
  padding: 1.5rem;
`;
const StyledButton = styled(Button)`
    float: right;
    margin-top: 1rem;

`;
const StyledListItem = styled(ListItem)`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questionDataArray[currentQuestionIndex];
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);

  
const openDialog = () => {
  setOpen(true);
}


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const submitAnswer = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    // Reset selected option
    setSelectedOption(null);
  };


  return (
    <Wrapper>
      <Nav/>
      <Container>
        {
          currentQuestionIndex === 5 ? (
            <Typography variant="h5">You have completed the quiz! Your score is {score}</Typography>
          ) : (
            <Typography variant="h5">Question {currentQuestionIndex + 1} of 5</Typography>
          )
        }
        <Typography variant="h5">{currentQuestion.questionText}</Typography>
        <Box>
          {currentQuestion.options.map((option, index) => {
            return (
              <Box key={index} >
                <StyledListItem name="option" value={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </StyledListItem>
              </Box>
            );
          })}
        </Box>
          {
            currentQuestionIndex > 3 ? (
              <StyledButton variant={"outlined"} onClick={() => openDialog()}>Submit Answer</StyledButton>
              ):(
              <StyledButton variant={"outlined"} onClick={submitAnswer}>Next Question</StyledButton>
            )
              
          }
        <ScoreBoard open={open} setOpen={setOpen} score={score} setScore={setScore}setCurrentQuestionIndex={setCurrentQuestionIndex}/>
      </Container>
    </Wrapper>
  );
};

export default QuizComponent;
