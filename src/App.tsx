import { Box } from '@mui/material';
import About from './components/about';
import Header from './components/header';
import Profits from './components/profits';
import Features from './components/features';
import Prices from './components/prices';
import TargetAudienceBlock from './components/target-audience-block';
import Footer from './components/footer';
import ExampleBlock from './components/example-block';

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
