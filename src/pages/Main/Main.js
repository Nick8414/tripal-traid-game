import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slider } from "../../components/Slider";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import CharacterCard from "../../components/CharacterCard";


import { CHARACTER } from "../../constants/heroesData";

import s from "./Main.module.scss";

const Main = () => {
	const [character, setCharacter] = useState(CHARACTER);
  const navigate = useNavigate();

	const handleLikeClick = (id) => {
    const newCharacterArr = character.map((item) =>
      item.id === id ? { ...item, isLike: !item.isLike } : item
    );
    setCharacter(newCharacterArr);
  };

  const handleBioClick = (id) => {
    navigate(`/bio/${id}`);
  };

  return (
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
  );
};

export default Main;
