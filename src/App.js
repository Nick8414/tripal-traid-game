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
      <div>
        <Heading className="center-text" level={3}>This is Heading</Heading>
        <Container className="app-container">
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
