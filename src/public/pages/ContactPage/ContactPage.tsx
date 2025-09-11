import { useThemeClasses } from "../../../hooks/useThemeClasses";
import { ContactCard } from "./ContactCard/ContactCard";
export const ContactPage = () => {
  const { bgClass } = useThemeClasses();
  return (
    <>
      <section
        className={`"contact-content flex flex-col items-center justify-center 
      ${bgClass} shadow-2xl w-full max-w-3xl rounded-2xl text-center p-4 sm:p-8 overflow-hidden"`}
      >
        <article
          className={`flex flex-col items-center justify-center mt-6
        rounded-xl shadow-md p-4 sm:p-6 w-full max-w-md text-left ${bgClass}`}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Información de contacto
          </h2>
          <ul className="space-y-2  text-start p-4">
            <li>
              <span className="font-semibold">Nombre:</span> Roger Gutiérrez
              Martínez
            </li>
            <li>
              <span className="font-semibold">País:</span> Cuba
            </li>
            <li>
              <span className="font-semibold">Ciudad:</span> Matanzas
            </li>
            <li>
              <span className="font-semibold">Correo:</span>{" "}
              rogergutierrezmartinez900@gmail.com
            </li>
            <li>
              <span className="font-semibold">Teléfono:</span> +53 54849352
            </li>
          </ul>
        </article>
        <article className="cards flex flex-wrap gap-4 sm:gap-10 p-4 items-center justify-center">
          <ContactCard
            href="https://whatsapp.com/roger"
            className="flex-1 flex items-center justify-center
        w-20 h-20 md:w-24 md:h-24
        rounded-full bg-white shadow-lg
        border border-gray-300
        hover:shadow-xl hover:scale-105
        transition-transform duration-300 ease-in-out"
            imgProps={{
              className: "w-20 h-20 md:w-22 md:h-22",
              src: "https://cdn-icons-png.flaticon.com/128/733/733585.png",
            }}
          />
          <ContactCard
            href="https://t.me/rogergm99"
            className="flex-1 flex items-center justify-center
        w-20 h-20 md:w-24 md:h-24
        rounded-full bg-white shadow-lg
        border border-gray-300
        hover:shadow-xl hover:scale-105
        transition-transform duration-300 ease-in-out"
            imgProps={{
              className: "w-20 h-20 md:w-22 md:h-22",
              src: "https://cdn-icons-png.flaticon.com/128/2111/2111646.png",
            }}
          />
          <ContactCard
            href="https://github.com/Roger2999"
            className="flex-1 flex items-center justify-center
        w-20 h-20 md:w-24 md:h-24
        rounded-full bg-white shadow-lg
        border border-gray-300
        hover:shadow-xl hover:scale-105
        transition-transform duration-300 ease-in-out"
            imgProps={{
              className: "w-20 h-20 md:w-22 md:h-22",
              src: "https://cdn-icons-png.flaticon.com/128/25/25231.png",
            }}
          />
        </article>
      </section>
    </>
  );
};
