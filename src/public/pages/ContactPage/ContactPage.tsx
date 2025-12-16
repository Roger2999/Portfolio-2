import { ThemeStore } from "../../../stores";

import { ContactCard } from "./ContactCard/ContactCard";
import "./ContactPage.css";
export const ContactPage = () => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <div
        className={`contact-card-container flex flex-col w-[500px] max-w-[80%]`}
      >
        <div
          className={`contact-card flex flex-col glass rounded-2xl font-mono p-6 w-full ${
            theme === "light" ? "bg-gray-300" : "text-gray-50"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Información de contacto
          </h2>
          <ul className="w-full space-y-2 text-start p-4">
            <li>
              <span>Nombre: </span> Roger Gutiérrez Martínez
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
        </div>

        <div className="card-details flex flex-wrap gap-4 sm:gap-10 p-4 items-center justify-center">
          <ContactCard
            href="https://whatsapp.com/roger"
            className=" flex items-center justify-center
       
        rounded-full
         transition-transform duration-300 ease-in-out hover:scale-105
        "
            imgProps={{
              className: "w-20 h-20 md:w-22 md:h-22",
              src: "https://cdn-icons-png.flaticon.com/128/733/733585.png",
            }}
          />
          <ContactCard
            href="https://t.me/rogergm99"
            className="flex items-center justify-center
        rounded-full  hover:scale-105
        transition-transform duration-300 ease-in-out"
            imgProps={{
              className: "w-20 h-20 md:w-22 md:h-22",
              src: "https://cdn-icons-png.flaticon.com/128/2111/2111646.png",
            }}
          />
          <ContactCard
            href="https://github.com/Roger2999"
            className="flex items-center justify-center
        rounded-full hover:scale-105
        transition-transform duration-300 ease-in-out"
            imgProps={{
              className: "w-20 h-20 md:w-22 md:h-22",
              src: "https://cdn-icons-png.flaticon.com/128/25/25231.png",
            }}
          />
        </div>
      </div>
    </>
  );
};
