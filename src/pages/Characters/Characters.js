import React, { useContext } from "react";

import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";

import s from "./Characters.module.scss";

import { CharactersContext } from "../../context/charactersContetxt";

const Characters = () => {
  const { characters, onLikeClick } = useContext(CharactersContext);

  return (
    <section className={s.cardSection}>
      <Container>
        <div className={s.cardTitle}>
          <Heading level={1} backLine>
            Marvel Cards
          </Heading>
          <Heading level={2}>Collect your best five</Heading>
        </div>
        <div className={s.cardWrap}>
          {characters.map((item) => (
            <div key={item.id}>
              <CharacterCard
                id={item.id}
                src={item.thumbnail.path}
                name={item.name}
                humanName={item.humanName}
                description={item.description}
                isLike={item.isLike}
                onLikeClick={onLikeClick}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Characters;
