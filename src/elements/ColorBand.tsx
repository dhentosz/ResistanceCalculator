import styles from "./ColorBand.module.css";
import { useState } from "react";

export default function ColorBand() {
  const [bandColor, setBandColor] = useState("black");
  const [bandValue, setBandValue] = useState(0);

  return (
    <div className={styles.color_band} id={bandColor}>
      <div className={styles.color_selections}>
        <button
          className={styles.color_btn}
          id={styles.black}
          onClick={() => {
            setBandColor(styles.black);
            setBandValue(0);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.brown}
          onClick={() => {
            setBandColor(styles.brown);
            setBandValue(1);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.red}
          onClick={() => {
            setBandColor(styles.red);
            setBandValue(2);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.orange}
          onClick={() => {
            setBandColor(styles.orange);
            setBandValue(3);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.yellow}
          onClick={() => {
            setBandColor(styles.yellow);
            setBandValue(4);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.green}
          onClick={() => {
            setBandColor(styles.green);
            setBandValue(5);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.blue}
          onClick={() => {
            setBandColor(styles.blue);
            setBandValue(6);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.violet}
          onClick={() => {
            setBandColor(styles.violet);
            setBandValue(7);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.grey}
          onClick={() => {
            setBandColor(styles.grey);
            setBandValue(8);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.white}
          onClick={() => {
            setBandColor(styles.white);
            setBandValue(9);
          }}
        ></button>
      </div>
    </div>
  );
}
