import type { ReactNode } from "react";
import { Footer, Header } from "./components";
import styles from "./Portfolio.module.css";
import { AuthStore, ThemeStore } from "./stores";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
}
export const Portfolio = ({ children }: Props) => {

  const theme = ThemeStore((state) => state.theme);
const isAuthenticated= AuthStore((state)=>state.isAuthenticated)
  return (
    <>
      <div data-theme={theme} className={`transition duration-500 ease ${styles.container}`}>
        <Header />
        {isAuthenticated&&(<div className="absolute top-20 left-10 w-fit"><NavLink to={"/private/dashboard"} className="btn btn-dash">Ir a Dashboard</NavLink></div>)}
        <div className={styles.content}>{children}</div>
        <Footer theme={theme} />
      </div>
    </>
  );
};
