import { frontendSkills as skills } from "../../../data/skillsData";
import { ThemeStore } from "../../../stores";
import { Modal } from "../../Modal/Modal";
import { SkillCard } from "../SkillCard/SkillCard";
import SkillCategory from "../SkillCategory/SkillCategory";
const SkillsSection = () => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <SkillCategory
      title="Frontend"
      colorClass={`skill-category ${
        theme == "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200"
      }`}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} theme={theme} {...skill}>
          <Modal
            id={skill.id}
            modalTitle={skill.name}
            description={skill.description}
            buttonProps={{
              onClick: () =>
                (
                  document.getElementById(skill.id) as HTMLDialogElement | null
                )?.showModal(),
              className: "btn1 btn btn-dash btn-info",
              children: "+",
            }}
          />
        </SkillCard>
      ))}
    </SkillCategory>
  );
};

export default SkillsSection;
