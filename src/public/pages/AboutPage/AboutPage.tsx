import { BioSection } from "../../../components/BioSection/BioSection";
import { ProfileHeader } from "../../../components/ProfileHeader/ProfileHeader";
import { SectionContainer } from "../../../components/SectionContainer/SectionContainer";
import { useThemeClasses } from "../../../hooks/useThemeClasses";
import { ThemeStore } from "../../../stores";

export const AboutPage = () => {
  const theme = ThemeStore((state) => state.theme);
  const { textClass, borderClass, bgClass } = useThemeClasses(theme);

  return (
    <SectionContainer
      id="about"
      maxWidth="80%"
      customWidth="1000px"
      className="rounded-xl shadow-2xl bg-gradient-to-br py-12 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <ProfileHeader textClass={textClass} borderClass={borderClass} />
        <BioSection theme={theme} bgClass={bgClass} />
      </div>
    </SectionContainer>
  );
};
