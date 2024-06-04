import { Box } from '@mui/material';
import About from './components/About';
import Header from './components/Header';
import Profits from './components/Profits';
import Features from './components/Features';
import Prices from './components/Prices';
import TargetAudienceBlock from './components/TargetAudienceBlock';
import Footer from './components/Footer';
import ExampleBlock from './components/ExampleBlock';

export const App = () => {
  return (
    <>
      <Header />
      <Box bgcolor="primary.main" sx={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
        <About />
      </Box>
      <Profits />
      <Features />
      <ExampleBlock />
      <TargetAudienceBlock />
      <Prices />
      <Box bgcolor="background.default" p={3}>
        <Footer />
      </Box>
    </>
  );
};

export default App;
