// Main resistor component/UI. Displays color bands for users to interact with in order to choose band colors to calculate ohm rating. Displays Output component and passes necessary data to it dependant on state.

import styles from "./Resistor.module.css";
import ColorBand from "./ColorBand";
import Output from "./Output.tsx";
import { useState } from "react";

export default function Resistor() {
  // Defines necessary state values for calculating ohm rating dependant on current color band selections
  const [firstValue, setFirstValue] = useState(0);
  const [secValue, setSecValue] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [tolerance, setTolerance] = useState(0);

  // Calculates the final output to be displayed
  function CalculateOutput(
    fVal: number,
    sVal: number,
    mVal: number,
    tVal: number
  ) {
    // Creates one single value out of first and second band values as base to be multiplied
    let basevalue = 10 * fVal + sVal;
    // Multiplies baseValue by the 3rd bands value (multiplier) for final ohm rating
    let ohmRating = basevalue * mVal;

    // Check whether ohmRating is in the thousands or higher to properly format output string by adding shorthand (K - thousand, M - million, G - billion) and adjusting ohmRating number accordingly
    let shorthand = "";
    if (ohmRating > 999 && ohmRating < 1000000) {
      ohmRating = ohmRating / 1000;
      shorthand = "K";
    } else if (ohmRating > 999999 && ohmRating < 1000000000) {
      ohmRating = ohmRating / 1000000;
      shorthand = "M";
    } else if (ohmRating > 999999999) {
      ohmRating = ohmRating / 1000000000;
      shorthand = "G";
    }

    // Returns a string with formatted output including ohm rating and tolerance percentage
    return ohmRating + shorthand + " ohms " + tVal + "% tolerance";
  }

  // Calls CalculateOutput() with state variables and stores into output variable
  let output = CalculateOutput(firstValue, secValue, multiplier, tolerance);

  return (
    <>
      <div className={styles.resistor_wrapper}>
        <div className={`${styles.pin} ${styles.left}`}></div>
        <div className={styles.main_body}>
          <div className={styles.band_wrapper}>
            <ColorBand callback={setFirstValue} type={"value"} />
            <ColorBand callback={setSecValue} type={"value"} />
            <ColorBand callback={setMultiplier} type={"multiplier"} />
            <div className={styles.band_spacer}></div>
            <ColorBand callback={setTolerance} type={"tolerance"} />
            <div className={styles.band_stopper}></div>
          </div>
        </div>
        <div className={`${styles.pin} ${styles.right}`}></div>
      </div>
      <Output data={output} />
    </>
  );
}
