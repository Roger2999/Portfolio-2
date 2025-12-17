import type { ReactNode } from "react";
interface Props {
  title: string;
  colorClass: string;
  children: ReactNode;
}
const SkillCategory = ({ title, colorClass, children }: Props) => {
  return (
    <div className={colorClass}>
      <h2>{title}</h2>

      <div className="skill-category-grid">{children}</div>
    </div>
  );
};

export default SkillCategory;
