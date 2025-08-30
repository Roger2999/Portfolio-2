import { ProjectComponent } from "../../../components";
import { ThemeStore } from "../../../stores";
import "./ProjectsPage.css";
export const ProjectsPage = () => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <div
        className={`projects-container ${
          theme == "dark" ? "text-gray-300" : "text-gray-500"
        }`}
      >
        <h1>Mis Proyectos</h1>
      </div>
      <div
        className={`skills-container py-10  ${
          theme === "dark" && "bg-gray-700"
        }`}
        style={{ marginTop: "30pxs" }}
      >
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Enginee"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
        <ProjectComponent
          period={"2022 - present"}
          rol={"Senior Frontend Engineer"}
          description={"Building the Whole Wide World"}
          skills={"Remix • Prisma • Effect • Tailwind"}
        />
      </div>
    </>
  );
};
