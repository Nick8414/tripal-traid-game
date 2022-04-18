import React from "react";

import Heading from '../Heading';
import Text from '../Text';

import s from "./CharacterCard.module.scss";
import {ReactComponent as Like} from './assets/heart.svg';

const CHARACTER = {
  id: 1011334,
  name: 'Spider-Man',
  description: 'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.',
  thumbnail: {
    path: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b'
  },
  humanName: 'Peter Parker',
  isLike: false,
};

export default function CharacterCard() {
  return (
    <div className={s.root}>
      <img
        src={CHARACTER.thumbnail.path}
        alt={CHARACTER.name}
        className={s.cardImage}
      />
      <div className={s.cardDetails}>
        <Heading level={2} className={s.cardName}>
          {CHARACTER.name}
        </Heading>
        <Heading level={3} className={s.cardHumanName}>
          {CHARACTER.humanName}
        </Heading>
        <Text element="p" className={s.cardDescription}>
          {CHARACTER.description}
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
