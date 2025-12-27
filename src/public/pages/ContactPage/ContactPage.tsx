import { ThemeStore } from "../../../stores";
import { ContactCard } from "./ContactCard/ContactCard";
import "./ContactPage.css";
import arrowIcon from "../../../assets/arrow-icon.svg";
export const ContactPage = () => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <div
        className={`contact-card-container flex flex-col w-[500px] max-w-[80%]`}
      >
        <div
          className={`contact-card flex flex-col rounded-2xl font-mono w-full ${
            theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-gray-200"
          }`}
        >
          <div className="contact-info p-6 border-t-4 rounded-2xl border-t-blue-500">
            <h2
              className={`text-2xl font-bold mb-4 text-center bg-white/20 rounded-2xl border-2 border-white/30 backdrop-blur-3xl ${
                theme === "light" && "bg-gray-500"
              }`}
            >
              Información de contacto
            </h2>
            <ul className="w-full space-y-2 text-start p-4">
              <li>
                <span className="font-bold">Nombre: </span> Roger Gutiérrez
                Martínez
              </li>
              <li>
                <span className="font-bold">País: </span> Cuba
              </li>
              <li>
                <span className="font-bold">Ciudad: </span> Matanzas
              </li>
              <li className="break-words">
                <span className="font-bold">Correo: </span>
                rogergutierrezmartinez900@gmail.com
              </li>
              <li>
                <span className="font-bold">Teléfono:</span> +53 54849352
              </li>
            </ul>
          </div>
          <div className="arrow flex justify-center items-center  bg-white/20 text-center font-bold backdrop-blur-2xl border border-white/40 transition-all duration-200 ease">
            <img src={arrowIcon} alt="arrow-icon" width={40} height={40} />
          </div>
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
