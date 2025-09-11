import type { Theme } from "../../stores";

interface Props {
  theme?: Theme;
  bgClass: string | undefined;
}
export const BioSection = ({ bgClass }: Props) => {
  return (
    <div className={`rounded-2xl shadow-2xl p-6 md:p-8 mb-12 ${bgClass}`}>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
          <span className="w-3 h-3 bg-teal-400 rounded-full mr-2"></span>
          Hola <span className="ml-2">👋</span>
        </h2>
        <p className="leading-relaxed">
          Soy un desarrollador frontend con experiencia en React y JavaScript.
          Disfruto crear experiencias web fluidas y modernas que combinan diseño
          atractivo con funcionalidad robusta. Mi objetivo es desarrollar
          interfaces que no solo se vean bien, sino que también ofrezcan una
          experiencia de usuario excepcional.
        </p>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Un poco más sobre mí
        </h3>
        <p className="leading-relaxed">
          Cuando no estoy codificando, me gusta leer sobre tecnología, tocar la
          guitarra. También soy un apasionado de la fotografía digital, los
          videojuegos indie, o el café.
        </p>
      </div>
    </div>
  );
};
