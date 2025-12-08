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
    }),
    { name: "skills-store" }
  )
);
