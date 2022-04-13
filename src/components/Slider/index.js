import Container from "../Container";
import Heading from '../Heading';

import s from "./Slider.module.css";

export const Slider = () => {
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading level={1} className={s.header}>
            Wow
          </Heading>
          <Heading level={2} className={s.subheader}>
            Wow.Wow.Wow
          </Heading>
          {/* <h1 className={s.header}>Wow</h1>
          <h2 className={s.subheader}>Wow.Wow.Wow</h2> */}
          <div className={s.call}>
            <button className={s.button}>Wow</button>
          </div>
        </Container>
      </div>
    </section>
  );
};
