import { Box, Typography,styled } from "@mui/material";

const Container = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: #4caf50;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Component = styled(Box)`
  height: 90vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #F2F2F2;
  box-shadow: 25px 25px 15px 6px rgba(0,0,0,0.1);

`;

const HighScore = () => {
  return (
    <Container>
      <Component>
      <Typography variant="h3">High Score</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Name</Typography>
        <Typography variant="h6">Score</Typography>
      </Box>
      </Component>
    </Container>
  )
}

export default HighScore;
