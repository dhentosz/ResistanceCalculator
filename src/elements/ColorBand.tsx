// Component to display current band color selected. Hides a list of buttons for color selections that is revealed upon hover.

import styles from "./ColorBand.module.css";
import React, { useState } from "react";

// Utilizes callback function prop to pass the current band value back to the parent Resistor component for calculation
export default function ColorBand({
  callback,
}: {
  callback: React.Dispatch<React.SetStateAction<number>>;
}) {
  // State var to hold currently selected band color. Is updated upon click of a color selection button
  const [bandColor, setBandColor] = useState("black");

  return (
    <div className={styles.color_band} id={bandColor}>
      <div className={styles.color_selections}>
        <button
          className={styles.color_btn}
          id={styles.black}
          onClick={() => {
            setBandColor(styles.black);
            callback(0);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.brown}
          onClick={() => {
            setBandColor(styles.brown);
            callback(1);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.red}
          onClick={() => {
            setBandColor(styles.red);
            callback(2);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.orange}
          onClick={() => {
            setBandColor(styles.orange);
            callback(3);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.yellow}
          onClick={() => {
            setBandColor(styles.yellow);
            callback(4);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.green}
          onClick={() => {
            setBandColor(styles.green);
            callback(5);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.blue}
          onClick={() => {
            setBandColor(styles.blue);
            callback(6);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.violet}
          onClick={() => {
            setBandColor(styles.violet);
            callback(7);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.grey}
          onClick={() => {
            setBandColor(styles.grey);
            callback(8);
          }}
        ></button>
        <button
          className={styles.color_btn}
          id={styles.white}
          onClick={() => {
            setBandColor(styles.white);
            callback(9);
          }}
        ></button>
      </div>
    </div>
  );
}
