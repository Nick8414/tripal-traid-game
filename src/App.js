import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import Heading from "./components/Heading/Heading";
import Container from "./components/Container";
import CharacterCard from "./components/CharacterCard";

import {CHARACTER} from './heroesData';

import s from "./App.module.scss";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <section className={s.cardSection}>
        <Container>
          <div className={s.cardTitle}>
            <Heading level={1} backLine>
              Marvel Cards
            </Heading>
            <Heading level={2}>Collect your best five</Heading>
          </div>
          <div className={s.cardWrap}>
            {CHARACTER.map((item) => (
              <div key={item.id}>
                <CharacterCard
                  id={item.id}
                  src={item.thumbnail.path}
                  name={item.name}
                  humanName={item.humanName}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default App;
