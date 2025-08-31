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
          period={"Enero 2023 - Marzo 2023"}
          rol={"Desarrollador Frontend"}
          description={
            "Aplicación web para gestión de tareas con arrastrar y soltar, categorías personalizables y recordatorios"
          }
          skills={"React • TypeScript • Redux Toolkit • Styled Components"}
        />

        <ProjectComponent
          period={"Febrero 2023 - Abril 2023"}
          rol={"Desarrollador Full Stack"}
          description={
            "Aplicación de pronóstico del tiempo con gráficos interactivos, geolocalización y alertas meteorológicas"
          }
          skills={"React • Node.js • Chart.js • OpenWeather API"}
        />

        <ProjectComponent
          period={"Marzo 2023 - Mayo 2023"}
          rol={"Desarrollador Frontend"}
          description={
            "Sistema de seguimiento de gastos e ingresos con visualización de datos, presupuestos y reportes exportables"
          }
          skills={"React • Context API • Recharts • Material UI"}
        />

        <ProjectComponent
          period={"Abril 2023 - Junio 2023"}
          rol={"Desarrollador Frontend"}
          description={
            "Red social minimalista con funcionalidades de publicaciones, comentarios, likes y perfiles de usuario"
          }
          skills={"React • Firebase • Redux • Tailwind CSS"}
        />

        <ProjectComponent
          period={"Mayo 2023 - Julio 2023"}
          rol={"Desarrollador Frontend"}
          description={
            "E-commerce especializado en productos ecológicos con carrito de compras, pasarela de pago y sistema de reseñas"
          }
          skills={"React • Stripe API • React Router • CSS Modules"}
        />

        <ProjectComponent
          period={"Junio 2023 - Agosto 2023"}
          rol={"Desarrollador Full Stack"}
          description={
            "Aplicación para seguimiento de salud con registro de actividades físicas, dieta y métricas de bienestar"
          }
          skills={"React • Express.js • MongoDB • D3.js"}
        />

        <ProjectComponent
          period={"Julio 2023 - Septiembre 2023"}
          rol={"Desarrollador Frontend"}
          description={
            "Plataforma de cursos online con reproductor de video, cuestionarios interactivos y progreso del estudiante"
          }
          skills={"React • Vite • Zustand • Ant Design"}
        />

        <ProjectComponent
          period={"Agosto 2023 - Octubre 2023"}
          rol={"Desarrollador Frontend"}
          description={
            "App para planificación de viajes con mapas interactivos, itinerarios y recomendaciones personalizadas"
          }
          skills={"React • Leaflet • React Query • Chakra UI"}
        />

        <ProjectComponent
          period={"Septiembre 2023 - Noviembre 2023"}
          rol={"Desarrollador Frontend"}
          description={
            "Buscador de recetas con filtros por ingredientes, tipo de dieta, favoritos y lista de compras integrada"
          }
          skills={"React • React Hook Form • Framer Motion • SASS"}
        />

        <ProjectComponent
          period={"Octubre 2023 - Diciembre 2023"}
          rol={"Desarrollador Full Stack"}
          description={
            "Sistema de gestión de eventos con calendario, venta de entradas, notificaciones y panel de administración"
          }
          skills={"React • Next.js • PostgreSQL • GraphQL"}
        />
      </div>
    </>
  );
};
