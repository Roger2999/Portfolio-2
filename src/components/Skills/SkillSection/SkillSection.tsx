import { ModalContext } from "../../../context/ModalContext/ModalContext";
import { frontendSkills as skills } from "../../../data/skillsData";
import { ThemeStore } from "../../../stores";
import { ModalPortal } from "../../Modal/ModalPortal";
import { SimpleButton } from "../../SimpleButton/SimpleButton";
import { SkillCard } from "../SkillCard/SkillCard";
import SkillCategory from "../SkillCategory/SkillCategory";
import { useContext } from "react";

const SkillsSection = () => {
  const theme = ThemeStore((state) => state.theme);

  const { openModal, setOpenModal } = useContext(ModalContext);
  return (
    <SkillCategory
      title="Frontend"
      colorClass={`skill-category ${
        theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200"
      }`}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} theme={theme} {...skill}>
          {skill.name === "React" && (
            <>
              <button
                className="btn btn-dash rounded-full mt-3"
                onClick={() => setOpenModal(true)}
              >
                +
              </button>
              <ModalPortal openModal={openModal} setOpenModal={setOpenModal}>
                <h3
                  id={skill.id ? `${skill.id}-title` : undefined}
                  className="font-bold text-lg"
                >
                  {skill.name}
                </h3>
                <div className="py-4">
                  {Array.isArray(skill.description)
                    ? skill.description.map((item) => (
                        <SimpleButton
                          className="btn btn-dash mr-2 mb-2"
                          key={item}
                        >
                          {item}
                        </SimpleButton>
                      ))
                    : skill.description}
                </div>
              </ModalPortal>
            </>
          )}
        </SkillCard>
      ))}
    </SkillCategory>
  );
};

export default SkillsSection;
