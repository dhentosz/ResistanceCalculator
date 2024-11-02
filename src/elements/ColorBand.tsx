import styles from "./ColorBand.module.css";

export default function ColorBand() {
  return (
    <div className={styles.color_band}>
      <div className={styles.color_selections}>
        <button className={styles.color_btn} id={styles.black}></button>
        <button className={styles.color_btn} id={styles.brown}></button>
        <button className={styles.color_btn} id={styles.red}></button>
        <button className={styles.color_btn} id={styles.orange}></button>
        <button className={styles.color_btn} id={styles.yellow}></button>
        <button className={styles.color_btn} id={styles.green}></button>
        <button className={styles.color_btn} id={styles.blue}></button>
        <button className={styles.color_btn} id={styles.violet}></button>
        <button className={styles.color_btn} id={styles.grey}></button>
        <button className={styles.color_btn} id={styles.white}></button>
      </div>
    </div>
  );
}
