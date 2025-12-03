import type { Theme } from "../../stores";

interface Props {
  theme?: Theme;
  bgClass: string | undefined;
}
export const BioSection = ({ bgClass }: Props) => {
  return (
    <div
      className={`rounded-2xl shadow-2xl p-8 border-t-4 md:mb-2 mb-10 border-blue-500 w-[60rem] max-w-[80%] ${bgClass}`}
    >
      <div className="mb-8">
        <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-4 w-[600px]  max-w-[80%] ">
          <span className="w-3 h-3 bg-teal-400 rounded-full mr-2"></span>
          Hola <span className="ml-2">👋</span>
        </h2>
        <p className="leading-relaxed">
          Desarrollador frontend especializado en React, TypeScript y soluciones
          que combinan rendimiento con experiencias impecables. Disfruto
          traducir conceptos en interfaces accesibles, animadas y enfocadas en
          el detalle. Me motiva liderar proyectos donde el código limpio, las
          pruebas y la colaboración constante con producto hacen la diferencia.
        </p>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Un poco más sobre mí
        </h3>
        <p className="leading-relaxed">
          Más allá del código, me apasiona mantener un equilibrio creativo:
          suelo explorar nuevas tendencias en diseño digital y experimentar con
          herramientas que potencian mi flujo de trabajo. La música es una parte
          importante de mi vida. Comprometido con el crecimiento colectivo,
          participo activamente en comunidades tecnológicas, comparto recursos
          para quienes inician en el desarrollo. Creo firmemente que enseñar,
          aprender y construir redes sólidas son motores clave para la
          innovación y el desarrollo profesional.
        </p>
      </div>
    </div>
  );
};
