import profileImage from "../../assets/perfil.png";
import type { Theme } from "../../stores";

interface Props {
  theme?: Theme;
  borderClass: string;
  textClass: string;
}
export const ProfileHeader = ({ borderClass, textClass }: Props) => {
  return (
    <div className="text-center p-5">
      <div className="inline-block relative mb-6">
        <img
          src={profileImage}
          alt="Roger"
          className={`w-40 h-40 md:w-36 md:h-36 rounded-full object-cover border-4 shadow-2xl ${borderClass}`}
        />
        <div className="absolute inset-5 rounded-full border-2 border-teal-400 animate-ping opacity-20"></div>
      </div>
      <h1 className={`text-4xl md:text-5xl font-mono mb-2 ${textClass}`}>
        Róger Gutiérrez Martínez
      </h1>
      <p className="text-xl text-teal-600 font-mono font-medium">
        Desarrollador Frontend React
      </p>
    </div>
  );
};
