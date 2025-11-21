import type { ReactNode } from "react";
import { Footer, Header, SimpleButton } from "./components";
import styles from "./Portfolio.module.css";
import { AuthStore, ThemeStore } from "./stores";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
}
export const Portfolio = ({ children }: Props) => {
  const toggleTheme = ThemeStore((state) => state.toggleTheme);
  const theme = ThemeStore((state) => state.theme);
const isAuthenticated= AuthStore((state)=>state.isAuthenticated)
  return (
    <>
      <div data-theme={theme} className={`transition duration-500 ease ${styles.container}`}>
        <Header />
        <div className="theme flex justify-end absolute top-20 right-10">
          <SimpleButton
            className={`rounded-full p-2 ${
              theme == "light" ? "bg-yellow-100" : "bg-gray-500"
            }`}
            onClick={toggleTheme}
          >
            {theme == "light" ? "🌞" : "🌙"}
          </SimpleButton>
        </div>
        {isAuthenticated&&(<div className="absolute top-20 left-10 w-fit"><NavLink to={"/private/dashboard"} className="btn btn-dash">Ir a Dashboard</NavLink></div>)}
        <div className={styles.content}>{children}</div>
        <Footer theme={theme} />
      </div>
    </>
  );
};
