import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { schemaProjects, type FormProjectData } from "../../models/form.model";
import { frontendSkills } from "../../data/skillsData";
//import { ProjectsStore } from "../../stores/ProjectsStore/ProjectsStore";
import { CustomInput, CustomSelect } from "../../components";
import "./Projects.css";
import {
  useCreateProject,
  useDeleteProject,
  useUpdateProject,
} from "../../hooks/useProjectsMutation";
import { EditProjectModal } from "../../components/EditProjectModal/EditProjectModal";
import { useGetProjects } from "../../hooks/useGetProjects";

export const Projects = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schemaProjects),
    defaultValues: {
      rol: "",
      description: "",
      startDate: "",
      endDate: "",
      technologies: [] as string[],
    },
    mode: "onBlur",
  });

  const tecnologiasOptions = frontendSkills.map((skill) => ({
    value: skill.name,
    label: skill.name,
  }));

  const { mutate, isPending } = useCreateProject();
  const { mutate: deleteMutate, isPending: isDeletePending } =
    useDeleteProject();
  const { mutate: updateMutate } = useUpdateProject();
  const [selectedProject, setSelectedProject] = useState<
    (Partial<FormProjectData> & { id: string }) | null
  >(null);
  const { data, isLoading, isError, error } = useGetProjects();
  const onSubmit = async (project: FormProjectData) => {
    mutate(project);
    reset();
  };

  const handleConfirmEdit = (data: FormProjectData) => {
    if (!selectedProject) return;
    updateMutate({ id: selectedProject.id, project: data });
    setSelectedProject(null);
  };
  return (
    <>
      <h1 className="w-full text-center font-bold text-gray-600 text-2xl mt-10">
        Gestión de proyectos
      </h1>
      <div className="flex-container flex justify-center gap-20 w-full px-10 mb-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 w-[400px] max-w-[80%]"
        >
          <CustomInput
            name="rol"
            label="Rol"
            control={control}
            type="text"
            error={errors.rol}
          />
          <CustomInput
            name="description"
            label="Descripción"
            control={control}
            type="text"
            error={errors.description}
          />
          <CustomInput
            name="startDate"
            label="Fecha Desde"
            control={control}
            type="date"
            error={errors.startDate}
          />
          <CustomInput
            name="endDate"
            label="Fecha Hasta"
            control={control}
            type="date"
            error={errors.endDate}
          />
          <CustomSelect
            name="technologies"
            label="Tecnologías Usadas"
            control={control}
            options={tecnologiasOptions}
            multiple={true}
            error={errors.technologies as FieldError | undefined}
          />
          <button type="submit" className="btn btn-success">
            {isPending ? "Agregando..." : "Agregar Proyecto"}
          </button>
        </form>

        {/* Tabla de proyectos */}
        <div className="w-full max-w-4xl min-w-[400px]">
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 h-full">
            <table className="table">
              <thead>
                <tr>
                  <th>Rol</th>
                  <th>Descripción</th>
                  <th>Fecha Desde</th>
                  <th>Fecha Hasta</th>
                  <th>Tecnologías</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={6}>
                      <div className="flex justify-center items-center py-10">
                        <p className="text-gray-500 font-semibold text-xl animate-pulse">
                          Cargando...
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : isError ? (
                  <tr>
                    <td colSpan={6} className="text-center text-red-500">
                      {`  Error al cargar los proyectos: ${error?.message} `}
                    </td>
                  </tr>
                ) : data && data.length > 0 ? (
                  data.map((p) => (
                    <tr key={p.id}>
                      <td>{p.rol}</td>
                      <td>{p.description}</td>
                      <td>{new Date(p.start_date).toLocaleDateString()}</td>
                      <td>{new Date(p.end_date).toLocaleDateString()}</td>
                      <td>
                        <div className="flex flex-wrap gap-1">
                          {p.technologies?.map((tech) => (
                            <span
                              key={tech}
                              className="badge badge-primary badge-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              setSelectedProject({
                                id: p.id,
                                rol: p.rol,
                                description: p.description,
                                startDate: p.start_date,
                                endDate: p.end_date,
                                technologies: p.technologies,
                              })
                            }
                            className="btn btn-sm btn-primary"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => deleteMutate(p.id)}
                            className="btn btn-sm btn-error"
                          >
                            {isDeletePending ? "Eliminando..." : "Eliminar"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <div className="alert alert-soft">
                        <span>
                          No hay proyectos registrados. Agrega uno para
                          comenzar.
                        </span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <EditProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onConfirm={handleConfirmEdit}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
