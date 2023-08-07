import styles, { layout } from "../style.js";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () =>  (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden"/> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>
    </div>
  </section>
);

export default CardDeal