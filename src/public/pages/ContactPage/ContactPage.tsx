import { ThemeStore } from "../../../stores";
import { ContactCard } from "./ContactCard/ContactCard";
export const ContactPage = () => {
  const theme = ThemeStore((state)=>state.theme)
  return (
    <>
      <article
        className={`flex flex-col items-center justify-center mt-6
        rounded-2xl border-blue-500 border-t-4 shadow-md p-4 sm:p-6 w-[30rem] max-w-[80%] text-left font-mono ${theme==="dark"?"bg-gray-700":"bg-gray-300"}`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Información de contacto
        </h2>
        <ul className="w-full space-y-2 text-start p-4">
          <li>
            <span>Nombre: </span> Roger Gutiérrez
            Martínez
          </li>
          <li>
            <span>País: </span> Cuba
          </li>
          <li>
            <span>Ciudad: </span> Matanzas
          </li>
          <li className="break-words">
            <span>Correo: </span>
            rogergutierrezmartinez900@gmail.com
          </li>
          <li>
            <span>Teléfono:</span> +53 54849352
          </li>
        </ul>
      </article>
      <article className="cards flex flex-wrap gap-4 sm:gap-10 p-4 items-center justify-center">
        <ContactCard
          href="https://whatsapp.com/roger"
          className="flex-1 flex items-center justify-center
        w-24 h-24
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
        w-24 h-24
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
        w-24 h-24
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
    </>
  );
};
