import React from "react";

import PropTypes from "prop-types";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";

import { BIO } from "./bioData";

import s from "./Biography.module.scss";

const Biography = ({ id, onBackClick }) => {
  const character = BIO[id];

  const dataForRender = character.map((character) => {
    switch (character.type) {
      case "h1":
        return <Heading level={1}>{character.text}</Heading>;
      case "h2":
        return <Heading level={2}>{character.text}</Heading>;
      case "paragraph":
        return <Text element="p">{character.text}</Text>;
      case "img":
        return <img className={s.image} src={character.src} alt="hero" />;
      default:
        return <Heading level={1}>Helow old</Heading>;
    }
  });

  return (
    <div className={s.root}>
      <Container>
				<div className={s.buttonContainer}>
					 <Button white onClick={onBackClick}>
          Go Back
        </Button>
				</div>
       
        {dataForRender.map((item) => item)}
      </Container>
    </div>
  );
};

Biography.defaultProps = {
  id: null,
};

Biography.propTypes = {
  id: PropTypes.number,
  onBackClick: PropTypes.func,
};

export default Biography;
