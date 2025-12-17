import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm, type FieldError } from "react-hook-form";
import { schemaProjects, type FormProjectData } from "../../models/form.model";
import "../Modal/ModalPortal.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomInput } from "../Forms/CustomInput/CustomInput";
import { CustomSelect } from "../Forms/CustomSelect/CustomSelect";
import { frontendSkills } from "../../data/skillsData";

interface Props {
  isOpen: boolean;
  project: (Partial<FormProjectData> & { id: string }) | null;
  onConfirm: (data: FormProjectData) => void;
  onClose: () => void;
}

export const EditProjectModal: React.FC<Props> = ({
  isOpen,
  project,
  onConfirm,
  onClose,
}) => {
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
  useEffect(() => {
    if (isOpen && project) {
      reset({
        rol: project.rol ?? "",
        description: project.description ?? "",
        startDate: project.startDate ? project.startDate.split("T")[0] : "",
        endDate: project.endDate ? project.endDate.split("T")[0] : "",
        technologies: project.technologies ?? [],
      });
    }
  }, [isOpen, project, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modall" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-bold text-lg">Editar proyecto</h3>
        <form
          onSubmit={handleSubmit((data) => onConfirm(data))}
          className="flex flex-col gap-3"
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
          <div className="flex justify-end gap-2 mt-2">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};
