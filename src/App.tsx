import { Box } from '@mui/material';
import About from './components/about';
import NavBar from './components/header';
import Profits from './components/profits';
import Features from './components/features';
import Prices from './components/prices';

export const App = () => {
  return (
    <>
      <NavBar />
      <Box bgcolor={'#2667D3'} sx={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
        <About />
      </Box>
      <Profits />
      <Features />
      <Prices />
    </>
  );
};

export default App;
