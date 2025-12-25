import { ThemeStore } from "../../stores";
import { PreviewButton } from "../../components";
import previewIcon from "../../assets/preview-icon.svg";
import gitHubIcon from "../../assets/github-icon.svg";

import styles from "./ProjectComponent.module.css";
interface Props {
  start: string;
  end: string;
  rol: string;
  description: string;
  skills: string[];
  preview_url?: string;
  code?: string;
}

export const ProjectComponent = ({
  start,
  end,
  rol,
  description,
  skills,
  preview_url,
  code,
}: Props) => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <article className={styles.container1}>
        <div className={`border-l-2 border-teal-400 ${styles.container2}`}>
          <div
            className={`periode-container flex flex-col gap-5 flex-1 justify-start items-start min-h-full font-semibold ${
              styles.periodeContainer
            } ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            <span
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              Desde:{" "}
              <span>
                {new Date(start).toLocaleDateString("es-Es", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </span>
            <span
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              Hasta:{" "}
              <span>
                {new Date(end).toLocaleDateString("es-Es", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </span>
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
              className={`${styles.description} ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {description}
            </p>
            <div
              className={`flex justify-start mt-8 flex-wrap gap-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-400"
              }`}
            >
              {skills
                ? skills.map((s, index) => (
                    <p
                      key={index}
                      className="badge badge-primary font-semibold p-3 sm:w-auto w-full"
                    >
                      {s}
                    </p>
                  ))
                : null}
            </div>
          </div>
          <div className="preview-btn w-full h-full flex justify-center items-center gap-6 sm:justify-start">
            {preview_url && (
              <PreviewButton
                href={preview_url}
                label="Preview"
                className={`${
                  theme == "dark" ? "bg-white/20" : "bg-gray-300"
                } backdrop-blur-3xl border-2 border-white/20 text-gray-900 font-semibold text-sm hover:bg-gray-400 hover:border-white/20 py-1 px-5`}
                target="_blank"
                rel="noopener noreferrer"
                icon={previewIcon}
              />
            )}
            {code && (
              <PreviewButton
                label="Code"
                href={code}
                className={`${
                  theme == "dark" ? "bg-white/20" : "bg-gray-300"
                } backdrop-blur-3xl border-2 border-white/20 text-gray-900 font-semibold text-sm hover:bg-gray-400 hover:border-white/20 py-1 px-5`}
                target="_blank"
                rel="noopener noreferrer"
                icon={gitHubIcon}
              />
            )}
          </div>
        </div>
      </article>
    </>
  );
};
