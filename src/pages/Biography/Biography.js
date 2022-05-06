import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";
import AnchorLink from "../../components/AnchorLink";

import { BIO } from "../../constants/bioData";

import s from "./Biography.module.scss";

const Biography = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = BIO[id];

  if (!character) {
    return <Navigate to="/characters" replace />
  }

  const handleBackClick = () => {
    navigate(-1);
  }

  const dataForRender = character.map((character, index) => {
    switch (character.type) {
      case "h1":
        return (
          <Heading key={index} level={1}>
            {character.text}
          </Heading>
        );
      case "h2":
        return (
          <Heading key={index} level={2}>
            {character.text}
            <AnchorLink 
              anchorName={character.text}
            />
          </Heading>
        );
      case "paragraph":
        return (
          <Text key={index} element="p">
            {character.text}
          </Text>
        );
      case "img":
        return (
          <img className={s.image} key={index} src={character.src} alt="hero" />
        );
      default:
        return <Text key={index}> {character.text} </Text>;
    }
  });

  return (
    <div className={s.root}>
      <Container>
        <div className={s.buttonContainer}>
          <Button color="black" onClick={handleBackClick}>
            Go Back
          </Button>
        </div>

        {dataForRender}
      </Container>
    </div>
  );
};

export default Biography;
