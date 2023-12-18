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
const Content = styled(Box)`
  margin-top: 2rem;
  padding: 1rem 2rem;
  height: 60vh;
  width: 70%;
  border: 1px solid #F5F5F5;
`;
const Heading = styled(Typography)`
   display: flex;
  justify-content: space-around;
`;

const NamesBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  border: 1px solid #F5F5F5;
`;

const HighScore = () => {
  return (
    <Container>
      <Component>
      <Typography variant="h3">High Score</Typography>
      <Content>
        <Heading>
        <Typography variant="h6">Name</Typography>
        <Typography variant="h6">Score</Typography>
        </Heading>
        <NamesBox>
          { [1,2,3,4,5,6,7,8,9].map((item) => (
            <Box>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="h6">{item.score}</Typography>
            </Box>
          ))

          }
          
        </NamesBox>
      </Content>
      </Component>
    </Container>
  )
}

export default HighScore;
