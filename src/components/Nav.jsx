import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar,Toolbar,Box, Typography,styled, Button } from '@mui/material';
import Timer from './Timer';


const StyledToolbar = styled(Toolbar)`
background-color: #4caf50;
`;

const Nav = () => {
  const navigate = useNavigate();

    const Highscore = () => {
      navigate("/highscore");
      
    }
  return (
        <Box>
          <AppBar >
            <StyledToolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" onClick={Highscore}>Highscore</Button>
              </Typography>
              <Typography color="inherit">Time:<Timer/></Typography>
            </StyledToolbar>
          </AppBar>
        </Box>
      );
    };

export default Nav;
