import { BioSection } from "../../../components/BioSection/BioSection";
import { ProfileHeader } from "../../../components/ProfileHeader/ProfileHeader";
//import { SectionContainer } from "../../../components/SectionContainer/SectionContainer";
import { useThemeClasses } from "../../../hooks/useThemeClasses";
import { ThemeStore } from "../../../stores";

export const AboutPage = () => {
  const theme = ThemeStore((state) => state.theme);
  const { textClass, borderClass, bgClass } = useThemeClasses();

  return (
   
      <div className="flex flex-col justify-center items-center w-full">
        <ProfileHeader textClass={textClass} borderClass={borderClass} />
        <BioSection theme={theme} bgClass={bgClass} />
      </div>
    
  );
};
