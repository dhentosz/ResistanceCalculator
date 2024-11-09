// Component to display data output of the calculation to the user.

import styles from "./Output.module.css";

// Explicity defines the prop types used
interface PropTypes {
  first: number;
  sec: number;
  multi: number;
  tol: number;
}

export default function Output({ first, sec, multi, tol }: PropTypes) {
  return (
    <div className={styles.data_wrapper}>
      DataOutput: {first}|{sec} - {multi} -- {tol}%
    </div>
  );
}
