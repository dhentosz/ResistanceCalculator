import styles from "./Output.module.css";

export default function Output({ first, sec, multi, tol }) {
  return (
    <div className={styles.data_wrapper}>
      DataOutput: {first}|{sec} - {multi} -- {tol}%
    </div>
  );
}
