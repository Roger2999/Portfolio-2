import SkillsSection from "../../../components/Skills/SkillSection/SkillSection";
import { ThemeStore } from "../../../stores";
import "./SkillsPage.css";
export const SkillsPage = () => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <div
      className={`skills-page ${
        theme == "dark" ? "text-gray-300" : "text-gray-500"
      }`}
    >
      <header className="skills-header">
        <h1>Mis Habilidades Técnicas</h1>
        <p>
          Conocimientos y tecnologías que domino y utilizo para crear soluciones
          digitales
        </p>
      </header>
      <div className="skills-section">
        <SkillsSection />
      </div>
    </div>
  );
};
