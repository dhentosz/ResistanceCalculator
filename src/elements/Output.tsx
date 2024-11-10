// Component to display data output of the calculation to the user.

import styles from "./Output.module.css";

// Explicity defines the prop types used
interface PropTypes {
  data: string;
}

export default function Output({ data }: PropTypes) {
  return <div className={styles.data_wrapper}>{data}</div>;
}
