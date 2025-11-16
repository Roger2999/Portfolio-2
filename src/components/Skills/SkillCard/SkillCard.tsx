import type { ReactNode } from "react";
interface Props {
  name: string;
  icon?: string;
  level: number;
  children: ReactNode;
  theme: string | null;
}

export const SkillCard = ({
  name,
  theme,
  icon: Icon,
  level = 0,
  children,
}: Props) => {
  return (
    <>
      <div
        className={`skill-card ${
          theme === "dark"
            ? "bg-gray-600 text-gray-200 py-3"
            : "bg-gray-300 text-gray-800 py-3"
        }`}
      >
        <div className="icon" style={{ transition: "transform 0.2s" }}>
          <img src={Icon} alt={name} />
        </div>
        <h3>{name}</h3>
        <div className="level">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={i <= level ? "active" : ""}></span>
          ))}
        </div>
        {children}
      </div>
    </>
  );
};
