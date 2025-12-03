import { ButtonNav, SimpleButton } from "../../components";
import { frontendSkills } from "../../data/skillsData";
import { ThemeStore } from "../../stores";
interface Props {
  img: string;
  description: string;
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
        <div className="card-text-container text-start">
          <div className="card-text-description mb-5">
            <p>{description}</p>
          </div>
          <div className="card-text-skills">
            <p>
              <strong>Habilidades técnicas:</strong>
              {frontendSkills.map((skill) => (
                <SimpleButton>{skill.name}</SimpleButton>
              ))}
            </p>
          </div>
        </div>
        <div className="buttons-container">
          <ButtonNav
            label={"Ver proyectos"}
            to={"/projects"}
            className="btn btn-info"
          />
          <ButtonNav
            label={"Contactar"}
            to={"/contact"}
            className="btn btn-info"
          />
          <a
            href="public/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download={"CV-Roger-Gutierrez-Martinez.pdf"}
            className="btn btn-info"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </>
  );
};
