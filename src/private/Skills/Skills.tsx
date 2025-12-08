import { SimpleButton } from "../../components";
import { skillsStore } from "../../stores/SkillsStore/SkillsStore";

export const Skills = () => {
  const addSkill = skillsStore((state) => state.addSkill);
  const skills = skillsStore((state) => state.skills);
  const removeSkill = skillsStore((state) => state.removeSkill);

  const skill = {
    id: crypto.randomUUID(),
    name: "Vue",
    description: "asidjasda",
    icon: "asdasdjao",
    level: 4,
  };
  return (
    <>
      <div className="skills-page">
        <SimpleButton
          onClick={() => {
            addSkill(skill);
          }}
        >
          Agregar
        </SimpleButton>
        <ul>
          {skills.map((s) => (
            <li key={s.id}>
              {s.name}{" "}
              <SimpleButton onClick={() => removeSkill(s.id)}>
                Eliminar
              </SimpleButton>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
