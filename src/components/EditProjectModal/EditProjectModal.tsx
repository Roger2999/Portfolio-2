import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import type { FormProjectData } from "../../models/form.model";
import "../Modal/ModalPortal.css";

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
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProjectData>({
    defaultValues: {
      rol: "",
      description: "",
      startDate: "",
      endDate: "",
      technologies: [],
    },
  });

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
          <label className="flex flex-col">
            <span>Rol</span>
            <input className="input input-bordered" {...register("rol")} />
            {errors.rol && (
              <span className="text-red-500">{errors.rol.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span>Descripción</span>
            <input
              className="input input-bordered"
              {...register("description")}
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span>Fecha Desde</span>
            <input
              type="date"
              className="input input-bordered"
              {...register("startDate")}
            />
            {errors.startDate && (
              <span className="text-red-500">{errors.startDate.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span>Fecha Hasta</span>
            <input
              type="date"
              className="input input-bordered"
              {...register("endDate")}
            />
            {errors.endDate && (
              <span className="text-red-500">{errors.endDate.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span>Tecnologías (coma separado)</span>
            <input
              className="input input-bordered"
              defaultValue={(project?.technologies ?? []).join(",")}
              {...register("technologies", {
                setValueAs: (v) =>
                  typeof v === "string" && v.length > 0
                    ? v.split(",").map((s) => s.trim())
                    : [],
              })}
            />
            {errors.technologies && (
              <span className="text-red-500">
                {errors.technologies.message}
              </span>
            )}
          </label>

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
