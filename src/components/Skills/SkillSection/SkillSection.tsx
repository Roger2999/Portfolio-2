//import { ModalContext } from "../../../context/ModalContext/ModalContext";
import { useState } from "react";
import { frontendSkills as skills } from "../../../data/skillsData";
import { ThemeStore } from "../../../stores";
import { ModalPortal } from "../../Modal/ModalPortal";
import { SimpleButton } from "../../SimpleButton/SimpleButton";
import { SkillCard } from "../SkillCard/SkillCard";
import SkillCategory from "../SkillCategory/SkillCategory";
//import { useContext } from "react";
export type Skill =
  | {
      id: string;
      name: string;
      description: string;
      icon: string;
      level: number;
    }
  | {
      id: string;
      name: string;
      description: string[];
      icon: string;
      level: number;
    };
const SkillsSection = () => {
  const theme = ThemeStore((state) => state.theme);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <SkillCategory
      title="Frontend"
      colorClass={`skill-category glass font-mono ${
        theme === "dark" ? "text-gray-300" : "bg-gray-200"
      }`}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} theme={theme} {...skill}>
          {(skill.name === "React" || skill.name === "CSS") && (
            <>
              <button
                className="btn btn-outline btn-md btn-circle mt-3 text-xl"
                onClick={() => setSelectedSkill(skill)}
              >
                +
              </button>
            </>
          )}
        </SkillCard>
      ))}
      <ModalPortal
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
      >
        <h3
          id={selectedSkill?.id ? `${selectedSkill.id}-title` : undefined}
          className="font-bold text-lg"
        >
          {selectedSkill?.name}
        </h3>
        <div className="py-4">
          {Array.isArray(selectedSkill?.description)
            ? selectedSkill.description.map((item) => (
                <SimpleButton className="btn btn-dash mr-2 mb-2" key={item}>
                  {item}
                </SimpleButton>
              ))
            : selectedSkill?.description}
        </div>
      </ModalPortal>
    </SkillCategory>
  );
};

export default SkillsSection;
