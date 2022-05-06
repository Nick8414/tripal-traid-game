import React from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

import s from "./Contacts.module.scss";

import photo from "./assets/photo.jpg";

const Contacts = () => {
  return (
    <div className={s.root}>
      <Container>
				<Heading level={2} className={s.contactsHeading}>Contacts</Heading>
        <section className={s.about}>
          <div className={s.aboutImage}>
            <img src={photo} alt="###" />
          </div>
          <div className={s.aboutText}>
            <Heading level={3}>Rokotyansky Nikolay</Heading>
            <Heading level={4}> "Front-end developer -:)"</Heading>

            <Text element="p">Programming languages - JavaScript, VBA</Text>
            <Text element="p">Frameworks - Vue, React, Node.JS, Express</Text>
            <Text element="p">Databases - MongoDB, MySQL/MariaDB, MS SQL</Text>
            <Text element="p">Version control systems - Git</Text>
            <Text element="p">
              Tools - Jira, GitHub, Confluence, Bitbucket, ESLint, Prettier,
              Webpack, Gulp
            </Text>
            <Text element="p">
              ManPower, (out-staffing company) for P&G Account
            </Text>
            <Text element="p">
              Tasks - Developing of applications whitch to allow to automate
              production processes at the Company.
            </Text>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contacts;
