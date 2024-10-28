import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <img src="src/assets/logo.png" alt="LOGO" id={styles.logo}></img>
        ResCalc
      </div>
    </>
  );
}
