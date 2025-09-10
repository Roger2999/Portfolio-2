import { ThemeStore } from "../../../stores";

export const AboutPage = () => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <section
        id="about"
        style={{ maxWidth: "80%", width: "1000px" }}
        className="rounded-xl shadow-2xl bg-gradient-to-br py-12 px-4 md:px-8"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header con foto y título */}
          <div className="text-center mb-12">
            <div className="inline-block relative mb-6">
              <img
                src="src\assets\photoperfil.png"
                alt="Tu nombre"
                className={`w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-900 shadow-2xl ${
                  theme == "dark" && "border-gray-400"
                }`}
              />
              <div className="absolute inset-0 rounded-full border-2 border-teal-400 animate-ping opacity-20"></div>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-mono mb-2 ${
                theme == "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Róger Gutiérrez Martínez
            </h1>
            <p className="text-xl text-teal-600 font-medium">
              Desarrollador Frontend React
            </p>
          </div>

          {/* Contenedor principal */}
          <div
            className={`bg-gray-100 rounded-2xl shadow-2xl p-6 md:p-8 mb-12 ${
              theme == "dark" && "bg-gray-800"
            }`}
          >
            {/* Introducción */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold  mb-4 flex items-center">
                <span className="w-3 h-3 bg-teal-400 rounded-full mr-2"></span>
                Hola <span className="ml-2">👋</span>
              </h2>
              <p className="leading-relaxed">
                Soy un desarrollador frontend con experiencia en React y
                JavaScript. Disfruto crear experiencias web fluidas y modernas
                que combinan diseño atractivo con funcionalidad robusta. Mi
                objetivo es desarrollar interfaces que no solo se vean bien,
                sino que también ofrezcan una experiencia de usuario
                excepcional.
              </p>
            </div>
            {/* Algo personal */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold  mb-4">
                Un poco más sobre mí
              </h3>
              <p className=" leading-relaxed">
                Cuando no estoy codificando, me gusta leer sobre tecnología,
                tocar la guitarra. También soy un apasionado de la fotografía
                digital, los videojuegos indie, o el café.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
