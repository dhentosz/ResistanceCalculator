import styles from "./Resistor.module.css";
import ColorBand from "./ColorBand";
import Output from "./Output.tsx";

export default function Resistor() {
  return (
    <>
      <div className={styles.resistor_wrapper}>
        <div className={`${styles.pin} ${styles.left}`}></div>
        <div className={styles.main_body}>
          <div className={styles.band_wrapper}>
            <ColorBand />
            <ColorBand />
            <ColorBand />
            <div className={styles.band_spacer}></div>
            <ColorBand />
            <div className={styles.band_stopper}></div>
          </div>
        </div>
        <div className={`${styles.pin} ${styles.right}`}></div>
      </div>
      <Output />
    </>
  );
}
