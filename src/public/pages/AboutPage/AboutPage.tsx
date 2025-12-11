import { BioSection } from "../../../components/BioSection/BioSection";
import { ProfileHeader } from "../../../components/ProfileHeader/ProfileHeader";
//import { SectionContainer } from "../../../components/SectionContainer/SectionContainer";
import { useThemeClasses } from "../../../hooks/useThemeClasses";

export const AboutPage = () => {
  const { textClass, borderClass } = useThemeClasses();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ProfileHeader textClass={textClass} borderClass={borderClass} />
      <BioSection />
    </div>
  );
};
