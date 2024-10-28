import { useEffect, useRef } from "react";
import styles from "./Header.module.css";

export default function Header() {
  // initiate reference to button element
  const btnRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    const btn = btnRef.current; // pull current button element
    let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches; // checks if user system preference is dark and stores boolean.

    // listen for click on btn and toggle light/dark mode based on current state.
    btn.addEventListener("click", () => {
      if (darkMode) {
        document.documentElement.style.setProperty("color-scheme", "light");
        darkMode = !darkMode;
      } else {
        document.documentElement.style.setProperty("color-scheme", "dark");
        darkMode = !darkMode;
      }
    });
  });
  return (
    <>
      <div className={styles.header}>
        <img src="src/assets/logo.png" alt="LOGO" id={styles.logo}></img>
        ResCalc
        <button ref={btnRef}>Theme</button>
      </div>
    </>
  );
}
