import { frontendSkills as skills } from "../../../data/skillsData";
import { ThemeStore } from "../../../stores";
import { Modal } from "../../Modal/Modal";
import { SkillCard } from "../SkillCard/SkillCard";
import SkillCategory from "../SkillCategory/SkillCategory";
import { useState } from "react";

type SkillType = { name: string; description: string | string[] };

const SkillsSection = () => {
  const theme = ThemeStore((state) => state.theme);
  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(null);

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
            <button
              type="button"
              className="btn btn-dash rounded-full mt-2"
              onClick={() =>
                setSelectedSkill({
                  name: skill.name,
                  description: skill.description,
                })
              }
            >
              +
            </button>
          )}
        </SkillCard>
      ))}

      {/* Un solo Modal que muestra la skill seleccionada (se renderiza fuera de las cards) */}
      <Modal
        id={selectedSkill?.name}
        modalTitle={selectedSkill?.name}
        description={selectedSkill?.description ?? ""}
        isOpen={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </SkillCategory>
  );
};

export default SkillsSection;
