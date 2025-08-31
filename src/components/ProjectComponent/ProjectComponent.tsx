import { ThemeStore } from "../../stores";
import styles from "./ProjectComponent.module.css";
interface Props {
  period: string;
  rol: string;
  description: string;
  skills: `${string}•${string}•${string}•${string}`;
}

export const ProjectComponent = ({
  period,
  rol,
  description,
  skills,
}: Props) => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <article className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.periodeContainer}>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {period}
            </p>
          </div>
          <div className={styles.bodyContainer}>
            <p
              style={
                theme === "dark"
                  ? { fontWeight: "bold" }
                  : { fontWeight: "bold", color: "black" }
              }
            >
              {rol}
            </p>
            <p
              style={theme === "dark" ? { color: "white" } : { color: "black" }}
            >
              {description}
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-400"
              }`}
            >
              {" "}
              {skills}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};
