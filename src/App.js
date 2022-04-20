import { useState } from "react";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import Heading from "./components/Heading";
import Container from "./components/Container";
import CharacterCard from "./components/CharacterCard";
import Biography from "./pages/Biography";

import { CHARACTER } from "./heroesData";

import s from "./App.module.scss";

const App = () => {
  const [character, setCharacter] = useState(CHARACTER);
  const [characterId, setCharacterId] = useState(null);
  const handleLikeClick = (id) => {
    const newCharacterArr = character.map((item) =>
      item.id === id ? { ...item, isLike: !item.isLike } : item
    );
    setCharacter(newCharacterArr);
  };

  const handleBioClick = (id) => {
    setCharacterId(id);
  };

  const handleBackClick = () => {
    setCharacterId(null);
  };

  return (
    <>
      <Header />

      {characterId ? (
        <Biography 
          id={characterId}
          onBackClick={handleBackClick} 
        />
      ) : (
        <>
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
                {character.map((item) => (
                  <div key={item.id}>
                    <CharacterCard
                      id={item.id}
                      src={item.thumbnail.path}
                      name={item.name}
                      humanName={item.humanName}
                      description={item.description}
                      isLike={item.isLike}
                      onLikeClick={handleLikeClick}
                      onBioClick={handleBioClick}
                    />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}
      <Footer />
    </>
  );
};

export default App;
