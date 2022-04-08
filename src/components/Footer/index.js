import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer class={s.root}>
      <div class={s.container}>
        <div class={s.footerWrap}>
          Coded with
          <span class={s.heart}></span>
          by You
        </div>
      </div>
    </footer>
  );
};
