import { Projects } from "../Projects/Projects";

export const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container flex flex-col justify-start items-center w-full gap-6 p-4">
        {/* Formulario */}
        <Projects />
      </div>
    </>
  );
};
