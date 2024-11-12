// Component to display current band color selected. Hides a list of buttons for color selections that is revealed upon hover.

import styles from "./ColorBand.module.css";
import React, { useState } from "react";

// Explicity defines the prop types used
interface PropTypes {
  callback: React.Dispatch<React.SetStateAction<number>>;
  type: string;
}

// Utilizes callback function prop to pass the current band value back to the parent Resistor component for calculation. Uses type passed from parent Resistor to display proper color button/values upon hover.
export default function ColorBand({ callback, type }: PropTypes) {
  // State var to hold currently selected band color. Is updated upon click of a color selection button
  const [bandColor, setBandColor] = useState("black");

  // Define 3 different sets of buttons for base values, multipliers, and tolerances
  const values = (
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
  );

  const multipliers = (
    <div className={styles.color_selections}>
      <button
        className={styles.color_btn}
        id={styles.black}
        onClick={() => {
          setBandColor(styles.black);
          callback(1);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.brown}
        onClick={() => {
          setBandColor(styles.brown);
          callback(10);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.red}
        onClick={() => {
          setBandColor(styles.red);
          callback(100);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.orange}
        onClick={() => {
          setBandColor(styles.orange);
          callback(1000);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.yellow}
        onClick={() => {
          setBandColor(styles.yellow);
          callback(10000);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.green}
        onClick={() => {
          setBandColor(styles.green);
          callback(100000);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.blue}
        onClick={() => {
          setBandColor(styles.blue);
          callback(1000000);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.violet}
        onClick={() => {
          setBandColor(styles.violet);
          callback(10000000);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.grey}
        onClick={() => {
          setBandColor(styles.grey);
          callback(100000000);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.white}
        onClick={() => {
          setBandColor(styles.white);
          callback(1000000000);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.gold}
        onClick={() => {
          setBandColor(styles.gold);
          callback(0.1);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.silver}
        onClick={() => {
          setBandColor(styles.silver);
          callback(0.01);
        }}
      ></button>
    </div>
  );

  const tolerances = (
    <div className={styles.color_selections}>
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
        id={styles.green}
        onClick={() => {
          setBandColor(styles.green);
          callback(0.5);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.blue}
        onClick={() => {
          setBandColor(styles.blue);
          callback(0.25);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.violet}
        onClick={() => {
          setBandColor(styles.violet);
          callback(0.1);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.grey}
        onClick={() => {
          setBandColor(styles.grey);
          callback(0.05);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.gold}
        onClick={() => {
          setBandColor(styles.gold);
          callback(5);
        }}
      ></button>
      <button
        className={styles.color_btn}
        id={styles.silver}
        onClick={() => {
          setBandColor(styles.silver);
          callback(10);
        }}
      ></button>
    </div>
  );

  // Define variable to hold one of the button sets above, dependant on value passed into type prop from Resistor component
  let bandType = <div></div>;

  if (type === "value") {
    bandType = values;
  } else if (type === "multiplier") {
    bandType = multipliers;
  } else if (type === "tolerance") {
    bandType = tolerances;
  }

  return (
    <div className={styles.color_band} id={bandColor}>
      {bandType}
    </div>
  );
}
