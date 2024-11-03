import styles from "./ColorBand.module.css";
import { useState } from "react";

export default function ColorBand() {
  const [bandColor, setBandColor] = useState("black");

  return (
    <div className={styles.color_band} id={bandColor}>
      <div className={styles.color_selections}>
        <button
          className={styles.color_btn}
          id={styles.black}
          onClick={() => setBandColor(styles.black)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.brown}
          onClick={() => setBandColor(styles.brown)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.red}
          onClick={() => setBandColor(styles.red)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.orange}
          onClick={() => setBandColor(styles.orange)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.yellow}
          onClick={() => setBandColor(styles.yellow)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.green}
          onClick={() => setBandColor(styles.green)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.blue}
          onClick={() => setBandColor(styles.blue)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.violet}
          onClick={() => setBandColor(styles.violet)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.grey}
          onClick={() => setBandColor(styles.grey)}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.white}
          onClick={() => setBandColor(styles.white)}
        ></button>
      </div>
    </div>
  );
}
