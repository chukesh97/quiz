import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar,Toolbar,Box, Typography,styled, Button } from '@mui/material';


const StyledToolbar = styled(Toolbar)`
    background-color: #4caf50;
`;

const Nav = () => {

    const ScoreBoard = () => {
      const navigate = useNavigate();
      navigate("/score");
      
    }
    const Time = new Date().toLocaleTimeString();
  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar >
            <StyledToolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" onClick={ScoreBoard}>Scoreboard</Button>
              </Typography>
              <Typography color="inherit">Time:{Time}</Typography>
            </StyledToolbar>
          </AppBar>
        </Box>
      );
    };

export default Nav;
