// Component to display data output of the calculation to the user.

import styles from "./Output.module.css";

// Explicity defines the prop types used
interface PropTypes {
  out: string;
}

export default function Output({ out }: PropTypes) {
  return <div className={styles.data_wrapper}>DataOutput: {out}</div>;
}
