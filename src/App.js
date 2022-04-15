import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import Heading from "./components/Heading/Heading";
import Container from "./components/Container";
import Text from "./components/Text";

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className="app-container">
        <Container>
          <Heading className="center-text" level={1}>Marvel Cards</Heading>
          <Heading className="center-text" level={2}>Collect your best five</Heading>
          <Text strong>This is a strong text.</Text>
          <Text italic disabled>
            This is an italic and disabled text.
          </Text>
          <Text className="red-text" element="p" italic strong>
            This is an italic and strong text.
          </Text>
          <Text element="span">This is a default text.</Text>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default App;
