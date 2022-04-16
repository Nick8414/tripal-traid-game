import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import Heading from "./components/Heading/Heading";
import Container from "./components/Container";
import Text from "./components/Text";

import s from './App.module.scss';

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <section className={s.cardSection}>
        <Container>
          <div className={s.cardTitle}>
            <Heading 
              level={1} 
              backLine
            >Marvel Cards</Heading>
            <Heading 
               level={2}
            >Collect your best five</Heading>
          </div>
          <div className={s.cardWrap}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default App;
