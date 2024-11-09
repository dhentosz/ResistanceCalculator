// Main resistor component/UI. Displays color bands for users to interact with in order to choose band colors to calculate ohm rating. Displays Output component and passes necessary data to it dependant on state.

import styles from "./Resistor.module.css";
import ColorBand from "./ColorBand";
import Output from "./Output.tsx";
import { useState } from "react";

export default function Resistor() {
  // Defines necessary state values for calculating ohm rating dependant on current color band selections
  const [firstValue, setFirstValue] = useState(0);
  const [secValue, setSecValue] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
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

    // Returns a string with formatted output including ohm rating and tolerance percentage
    return ohmRating + "ohms " + tVal + "% tol";
  }

  // Calls CalculateOutput with state variables and stores into output variable
  let output = CalculateOutput(firstValue, secValue, multiplier, tolerance);

  return (
    <>
      <div className={styles.resistor_wrapper}>
        <div className={`${styles.pin} ${styles.left}`}></div>
        <div className={styles.main_body}>
          <div className={styles.band_wrapper}>
            <ColorBand callback={setFirstValue} />
            <ColorBand callback={setSecValue} />
            <ColorBand callback={setMultiplier} />
            <div className={styles.band_spacer}></div>
            <ColorBand callback={setTolerance} />
            <div className={styles.band_stopper}></div>
          </div>
        </div>
        <div className={`${styles.pin} ${styles.right}`}></div>
      </div>
      <Output out={output} />
    </>
  );
}
