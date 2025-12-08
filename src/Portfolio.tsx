import type { ReactNode } from "react";
import { Footer, Header } from "./components";
import styles from "./Portfolio.module.css";
import { ThemeStore } from "./stores";

interface Props {
  children: ReactNode;
}
export const Portfolio = ({ children }: Props) => {
  const theme = ThemeStore((state) => state.theme);

  return (
    <>
      <div
        data-theme={theme}
        className={`transition duration-500 ease ${styles.container}`}
      >
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer theme={theme} />
      </div>
    </>
  );
};
