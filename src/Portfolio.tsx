import type { ReactNode } from "react";
import { Footer, Header, SimpleButton } from "./components";
import styles from "./Portfolio.module.css";
import { ThemeStore } from "./stores";

interface Props {
  children: ReactNode;
}
export const Portfolio = ({ children }: Props) => {
  const toggleTheme = ThemeStore((state) => state.toggleTheme);
  const theme = ThemeStore((state) => state.theme);

  return (
    <>
      <div data-theme={theme} className={`${styles.container}`}>
        <Header />
        <div className="theme flex justify-end mr-9 mt-2">
          <SimpleButton
            className={`rounded-full ${
              theme == "light" ? "bg-yellow-100" : "bg-gray-500"
            }`}
            onClick={toggleTheme}
          >
            {theme == "light" ? "🌞" : "🌙"}
          </SimpleButton>
        </div>
        <div className={styles.content}>{children}</div>
        <Footer theme={theme} />
      </div>
    </>
  );
};
