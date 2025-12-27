import { CustomCard } from "../../../components";
import profileImage from "../../../assets/aboutme-photo.png";
import { ThemeStore } from "../../../stores";
import "./HomePage.css";

export const HomePage = () => {
  const theme = ThemeStore((state) => state.theme);

  return (
    <>
      <div className="card-container">
        <div className={`card ${theme=="dark"?"bg-gray-800":"bg-gray-200"}`}>
          <CustomCard
            title={"Frontend web developer"}
            img={profileImage}
            theme={theme}
          />
        </div>
      </div>
    </>
  );
};
