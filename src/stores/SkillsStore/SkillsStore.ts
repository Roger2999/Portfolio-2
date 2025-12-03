import { create } from "zustand";
import { persist } from "zustand/middleware";

type Skill = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  description: string;
  icon: string;
  level: number;
};
interface SkillsState {
  skills: Skill[];
  addSkill: (skill: Skill) => void;
  removeSkill: (id: string) => void;
  editSkill: (skillEdited: Skill) => Skill;
}

export const skillsStore = create(
  persist<SkillsState>(
    (set) => ({
      skills: [],
      addSkill: (skill) =>
        set((state) => ({
          skills: [...state.skills, skill],
        })),
      removeSkill: (id) =>
        set((state) => ({
          skills: state.skills.filter((s) => s.id !== id),
        })),
      editSkill: (skillEdited) =>
        set((state) => ({
          skills: state.skills.map((skill) => {
            skill.id === skillEdited.id
              ? [...state.skills, skillEdited]
              : skill;
          }),
        })),
    }),
    { name: "skills-store" }
  )
);
