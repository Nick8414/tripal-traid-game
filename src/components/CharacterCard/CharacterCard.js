import React from "react";
import PropTypes from 'prop-types';

import Heading from '../Heading';
import Text from '../Text';

import s from "./CharacterCard.module.scss";
import {ReactComponent as Like} from './assets/heart.svg';

export default function CharacterCard({ id, name, src, humanName, description }) {
  return (
    <div className={s.root}>
      <img
        src={src}
        alt={name}
        className={s.cardImage}
      />
      <div className={s.cardDetails}>
        <Heading level={2} className={s.cardName}>
          {name}
        </Heading>
        <Heading level={3} className={s.cardHumanName}>
          {humanName}
        </Heading>
        <Text element="p" className={s.cardDescription}>
          {description}
        </Text>
        <div className={s.cardMeta}>
          <div className={s.like}>
						<Like />
					</div>
          <div className={s.readBio}>
            <a href="#">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string,
  human: PropTypes.string,
  description: PropTypes.string,
}

