import styles from "./Resistor.module.css";
import ColorBand from "./ColorBand";
import Output from "./Output.tsx";
import { useState } from "react";

export default function Resistor() {
  const [firstValue, setFirstValue] = useState(0);
  const [secValue, setSecValue] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [tolerance, setTolerance] = useState(0);

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
      <Output
        first={firstValue}
        sec={secValue}
        multi={multiplier}
        tol={tolerance}
      />
    </>
  );
}
