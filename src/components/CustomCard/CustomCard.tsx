import { ButtonNav, SimpleButton } from "../../components";
import { frontendSkills } from "../../data/skillsData";
import { ThemeStore } from "../../stores";
interface Props {
  img: string;
  title: string;
  theme: string | null;
}
export const CustomCard = ({ img, title }: Props) => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <div className={`image-perfil`}>
        <img
          className={`${
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
          <div className="card-text-description mb-5 text-lg">
            <p>
              Desarrollador frontend con especial enfoque en{" "}
              <span className="text-amber-500 font-bold">
                React y TypeScript
              </span>
              , de Matanzas , Cuba{" "}
              <img
                src="public/cu.svg"
                width={30}
                height={20}
                className="inline"
              />{" "}
              . Me apasiona escribir{" "}
              <span className="text-amber-500 font-bold">código limpio</span> y
              mantener{" "}
              <span className="text-amber-500 font-bold">buenas prácticas</span>
              , mientras continúo aprendiendo y mejorando cada día como
              desarrollador. Este portfolio refleja mi compromiso con soluciones
              modernas, diseño intuitivo y estándares web de calidad.
            </p>
          </div>
          <div className="card-text-skills">
            <p className="mb-3">
              <strong>Habilidades técnicas:</strong>
            </p>
            <div className="flex flex-wrap gap-5">
              {frontendSkills.map((skill) => (
                <SimpleButton
                  className="btn btn-outline btn-accent btn-sm"
                  key={skill.name}
                >
                  {skill.name}
                </SimpleButton>
              ))}
            </div>
          </div>
        </div>
        <div className="buttons-container  ">
          <ButtonNav
            label={"Ver proyectos"}
            to={"/projects"}
            className="btn btn-outline rounded-2xl"
          />
          <ButtonNav
            label={"Contactame"}
            to={"/contact"}
            className={`btn btn-outline rounded-2xl`}
          />
          <a
            href="public/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download={"CV-Roger-Gutierrez-Martinez.pdf"}
            className="btn btn-outline rounded-2xl"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </>
  );
};
