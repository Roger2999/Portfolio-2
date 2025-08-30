import type { ReactNode } from "react";
import { ButtonNav } from "../../components";
import { ThemeStore } from "../../stores";
interface Props {
  img: string;
  description: ReactNode;
  title: string;
  theme: string | null;
}
export const CustomCard = ({ img, description, title }: Props) => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <div className={`image-perfil`}>
        <img
          className={`border-4 ${
            theme == "dark" ? " border-gray-300" : "border-gray-900"
          }`}
          src={img}
          alt={title}
        />
      </div>
      <div className="card-bodyy">
        <h5
          className={`card-title ${
            theme === "dark" ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {title}
        </h5>
        <div className="card-text">{description}</div>
        <div className="buttons-container">
          <ButtonNav label={"Ver proyectos"} type="button" path={"/projects"} />
          <ButtonNav label={"Contactar"} type={"button"} path={"/contact"} />
        </div>
      </div>
    </>
  );
};
