import React from "react";
import { useParams } from 'react-router-dom';

import PropTypes from "prop-types";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";

import { BIO } from "../../constants/bioData";

import s from "./Biography.module.scss";

const Biography = () => {
  const {id} = useParams();
  const character = BIO[id];

  const dataForRender = character.map((character, index) => {
    switch (character.type) {
      case "h1":
        return <Heading key={index} level={1}>{character.text}</Heading>;
      case "h2":
        return <Heading key={index} level={2}>{character.text}</Heading>;
      case "paragraph":
        return <Text key={index} element="p">{character.text}</Text>;
      case "img":
        return <img className={s.image} key={index} src={character.src} alt="hero" />;
      default:
        return <Text key={index}> {character.text} </Text>;
    }
  });

  return (
    <div className={s.root}>
      <Container>
				{/* <div className={s.buttonContainer}>
					 <Button color="black" onClick={handleBackClick}>
          Go Back
        </Button>
				</div> */}
       
        {dataForRender}
      </Container>
    </div>
  );
};

// Biography.defaultProps = {
//   id: null,
// };

// Biography.propTypes = {
//   onBackClick: PropTypes.func,
// };

export default Biography;